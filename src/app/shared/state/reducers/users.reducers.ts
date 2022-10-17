import { createReducer,on } from "@ngrx/store";
import { User } from "src/app/core/lib/interfaces/entity.interfaces";
import { userState } from "../../interface/user.state";
import { 
    loadedUsers, 
    loadUsers,
    createUserAction,
    createUserSuccess,
    createUserActionError,
    editUserSuccess,
    editUserAction,
    loadedUserById

} from "../actions/users.actions";

export const initialState :userState={ 
    loading:false, 
    id:'',
    users: {}as User,
    message:'',
    error:''
}

export const usersReducer = createReducer(
    initialState,
    on(loadUsers,(state)=>{
        return {
            ...state,
            loading:true
        }
    }),
    on(loadedUsers, (state, { users })=>{
        return{
            ...state,
            loading:false,
            users
        }
    }),
    on(loadedUserById, (state, {id}) =>{
        return {
            ...state,
            id,
        }
    }),
    on(createUserAction, (state, {body})=>{
        return{
            ...state, 
            body
        }
    }),
    on(createUserSuccess, (state,{})=>{
        return{
            ...state,
            error:'success'
        }
    }),
    on(createUserActionError, (state, error) => {
        return { ...state, error: "error" };
    }),
    on(editUserSuccess, (state)=>{
        return{
            ...state,
            message:'success'
        }
    }),
    on(editUserAction, (state,{id})=>{
        return{
            ...state,
            id
        }
    }),
    
)