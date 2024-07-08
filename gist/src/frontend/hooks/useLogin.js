import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../../backend/store/editor-slice";
import axios from "axios";

export const useLogin=()=>{
    let dispatch=useDispatch()

const  login=async(email, password)=>{



    let response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      console.log(response.data,"Now doing redux things");
      localStorage.setItem('user',JSON.stringify(response.data))
  dispatch(LOGIN(response.data))


}
   return {login} 
} 