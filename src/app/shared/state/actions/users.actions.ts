import { createAction,props } from "@ngrx/store";
import { User } from "src/app/core/lib/interfaces/entity.interfaces";

export const loadUsers= createAction(
    '[Users] Loading'
);
//..............TRAER...........
export const loadedUsers=createAction(
    '[Users] Loaded Success',
    props<{users: User}>()
);

///----------------TRAER POR ID
export const loadedUserById =createAction(
    '[Users Loaded User By Id ',
    props<{id:string}>()
);

//.............CREAR...........
export const createUserSuccess = createAction(
    '[Users Create] User Created'
);
export const createUserAction = createAction(
    '[User Create] creating User',
    props<{body:any}>()
);
export const createUserActionError= createAction(
    '[User Create] Creating User Error' ,
    props<{error:any}>()
);


//.............EDITAR...........
export const editUserSuccess = createAction(
    '[User Edit] User Edited'
);

export const editUserAction = createAction(
    '[User Edit] Editing User',
    props<{ id: string; body: any }>()
);
export const editUserActionError = createAction(
    '[User Edit] Editing User Error',
    props<{error:any}>()
);
  

//.............ELIMINAR..........
export const deleteUser = createAction(
    '[User] Deleting User',
    props<{id:string}>()
);
export const deleteUserSuccess = createAction(
    '[Users] User Deleted'
)
