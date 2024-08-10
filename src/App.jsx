import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TextEditor from "./frontend/components/TextEditor";
import TextArea from "./frontend/components/TextArea";
import SearchBar from "./frontend/components/SearchBar";
import NavBar from "./frontend/components/NavBar";
import SignUp from "./frontend/pages/SignUp";
import Login from "./frontend/pages/Login";
import Home from "./frontend/components/Home";
import TextEditor1 from "./frontend/components/TextEditor1";
import UserData from "./frontend/components/UserData";

function App() {
  const edit = useSelector((state) => state.flag.value);

  useEffect(() => {
    console.log("App edit state-", edit);
  }, [edit]);
  // const [edit, setEdit] = useState(0)

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/edit1" element={<TextEditor1 />} />
          <Route path="/mydata" element={<UserData />} />
        </Routes>
      </BrowserRouter>

      {/* <SearchBar/>
<p>. </p>
<p>. </p>

    {edit? <TextArea/>  :   <TextEditor/>} */}
    </>
  );
}

export default App;
