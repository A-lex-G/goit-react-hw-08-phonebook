import { useAuth } from "hooks";
import { useDispatch } from "react-redux"
import { LogOut } from "redux/auth/operations";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <>
            <p>Wellcome, {user.name}</p>
            <button type='button' onClick={() => dispatch(LogOut())}>
                LogOut
            </button>
        </>
    )

}