import { useDispatch } from "react-redux"
import { LOGOUT } from "../../backend/store/editor-slice";


export const uselogout=()=>{

const dispatch=useDispatch();

    const logout=()=>{
        localStorage.removeItem('user')
        dispatch(LOGOUT())
        window.location.reload();
    }
    return {logout}
}