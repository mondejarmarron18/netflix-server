import { Request, Response, Router } from "express";
import userController from "../controller/user.controller";

const userRoute = Router();

userRoute.get("/", (req: Request, res: Response) => {
  res.send("User API is working");
});

userRoute.post("/signUp", userController.signUp);
userRoute.post("/signIn", userController.signIn);

export default userRoute;
