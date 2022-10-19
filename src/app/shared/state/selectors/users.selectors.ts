
import { createSelector } from "@ngrx/store"; 
import { userState } from "../../interface/user.state";
import { AppState } from "../app.state";

export const selectUserFeature = (state:AppState)=> state.users;

export const selectUser =createSelector(
    selectUserFeature,
    (state:userState)=> state.users
);
export const selectUserById = createSelector(
    selectUserFeature,
    (state:userState)=> state.id
)
export const selectLoading =createSelector(
    selectUserFeature,
    (state:userState)=> state.loading
);
export const selectUserSuccess = createSelector(
    selectUserFeature,
    (state:userState) => state.message
);
export const selectUserError = createSelector(
    selectUserFeature,
    (state: userState) => state.error
  );