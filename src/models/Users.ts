import { Schema, model, Types } from "mongoose";
import { TUser } from "../types/user";

const schema = new Schema<TUser>({
  id: Types.ObjectId,
  email: {
    required: true,
    type: String,
    trim: true,
  },
  password: {
    required: true,
    type: String,
    trim: true,
  },
  created: Date,
});

const Users = model("users", schema);

export default Users;
