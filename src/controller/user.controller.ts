import { Request, Response } from "express";
import Users from "../models/Users";
import { TUser } from "../types/user";
import { hashSync, compareSync } from "bcrypt";

const userController = {
  signUp: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      if (await Users.exists({ email }))
        return res.status(409).send({ error: "Email already taken" });

      const data: Omit<TUser, "id"> = {
        email,
        password: hashSync(password, 10),
        created: new Date(Date.now()),
      };
      const user = new Users(data);

      res.status(201).send(await user.save());
    } catch (error) {
      res.status(400).send({ error });
    }
  },

  signIn: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const user = await Users.findOne({ email });
      const userPassword = user?.password as string;

      if (!compareSync(password, userPassword))
        return res.status(403).send({ error: "Email/Password invalid" });

      res.status(200).send(user);
    } catch (error) {
      res.status(403).send({ error: "Email/Password invalid" });
    }
  },
};

export default userController;
