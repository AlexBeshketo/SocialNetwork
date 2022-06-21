import {Dispatch} from "redux";
import {setFollowingInProgress} from "../state/users-reducer";
import {handleServerAppError} from "./error-utils";

export const followUnfollow = async (dispatch: Dispatch, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(setFollowingInProgress(true, userId))

    const data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    } else {
        handleServerAppError(dispatch, data)
    }
    dispatch(setFollowingInProgress(false, userId))
}