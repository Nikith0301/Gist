import React,{useState,useEffect} from 'react'
import axios from 'axios';
import TextArea from './TextArea'
import { useDispatch, useSelector } from "react-redux";
export default function UserData() {



    const[input,setInput]=useState(`bvkubvdubvduvbduv
        dkjbvjdbvjdbv`);
const [notes,setNotes]=useState([]);

let user=JSON.parse(localStorage.getItem('user')) 


async function handleClick(){
    const resp=await axios.get(`http://localhost:3001/notes/66675a85f39ca7836561224d`,{
      headers:{
        Authorization:`Bearer ${user.token}`,
      }
    })
    let obj=resp.data
    let arr=obj.map((x)=>{return x})
    setNotes(arr)
    console.log(arr)
}

  return (
    <>
    
    
    <button onClick={handleClick}>Get My data</button>

{notes ? 
notes.map((obj,idx)=>( <TextArea text={obj.text} uid={idx}/>))
:  <TextArea text={7} uid={6} />}
<TextArea text={input} uid={6} />
    
    </>
  )
}
