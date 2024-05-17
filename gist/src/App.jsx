import { useEffect, useState } from 'react'
import { useDispatch,useSelector } from "react-redux";
import './App.css'
import TextEditor from './frontend/components/TextEditor'
import TextArea from './frontend/components/TextArea'
import SearchBar from './frontend/components/SearchBar';

function App() {

const edit=useSelector((state)=>state.flag.value)

useEffect(()=>{console.log("App edit state-",edit)},[edit])
  // const [edit, setEdit] = useState(0)

  return (
    <>
<SearchBar/>
<p>. </p>
<p>. </p>
<p>. </p>
    {edit? <TextArea/>  :   <TextEditor/>}
  
    </>
  )
}

export default App
