import {Types} from 'mongoose'

type TUser = {
    id: Types.ObjectId;
    email: String;
    password: String;
    created: Date
}