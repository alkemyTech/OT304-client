import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { NewsUsersService } from "src/app/core/services/news-users.service";
import { loadUsers,createUserSuccess,createUserAction,createUserActionError, deleteUser, deleteUserSuccess, editUserAction, editUserSuccess, editUserActionError, loadedUsers, loadedUserById } from "../actions/users.actions";

@Injectable()
export class UserEffects{

    constructor(
        private actions$:Actions,
        private userService: NewsUsersService,
    ){}

    loadUsers$= createEffect(()=>this.actions$.pipe(
        ofType(loadUsers),
        mergeMap(()=>this.userService.getUser()
            .pipe(
                map(users => ({
                    type:'[Users] Loaded Success',
                    users
                })),
                catchError(()=>EMPTY)
            ))
    ));
    
    
    
    loadedUser$=createEffect(()=>this.actions$.pipe(
        ofType(loadUsers),
        mergeMap(()=> this.userService.getUser()
            .pipe(
                map(users=>loadedUsers({users})),
                catchError(()=>EMPTY)
            ))
    ))
  

    createUser$ = createEffect(()=> this.actions$.pipe(
        ofType(createUserAction),
        mergeMap((action:any)=>
            this.userService.createUser(action.body).pipe(
                map(()=> createUserSuccess()),
                catchError((error)=>of(createUserActionError(error)))
            )    
        ))
    );

    editUser$ = createEffect(()=> this.actions$.pipe(
        ofType(editUserAction),
        mergeMap((action)=> 
            this.userService.editUser(action.id,action.body).pipe(
                map(()=> editUserSuccess()),
                catchError((error)=>of(editUserActionError(error)))
            )
        )
    ));
/*
    deleteUser$= createEffect(()=>
        this.actions$.pipe(
            ofType(deleteUser),
            mergeMap((action)=> this.userService.deleteUser(action.id)
                .pipe(
                    map(()=>deleteUserSuccess()),
                    catchError(()=>EMPTY)
                )
            )
        )
    );
*/

}