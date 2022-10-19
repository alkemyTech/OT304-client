import { User } from "src/app/core/lib/interfaces/entity.interfaces";

export interface userState{
    loading:boolean;
    id:string;
    users:User;
    message:string;
    error:string;
}