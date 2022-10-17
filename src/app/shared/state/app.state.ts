import { ActionReducerMap } from "@ngrx/store";
import { userState } from "../interface/user.state";
import { usersReducer} from "../state/reducers/users.reducers"



export  interface AppState{
    users:userState,
}

export const ROOT_REDUCERS:ActionReducerMap<AppState>={
    users: usersReducer
};