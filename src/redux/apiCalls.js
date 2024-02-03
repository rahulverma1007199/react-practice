import { updateError, updateStart, updateSuccess } from "./userSlice"

export const updateUser = async (user, dispatch) => {
    dispatch(updateStart());

    try {
        //add axios here
        const res = await {};
        dispatch(updateSuccess(res.data));
    } catch (error) {
        dispatch(updateError());
    }
}