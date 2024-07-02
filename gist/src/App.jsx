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
          <Route path="/" element={<SearchBar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
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
