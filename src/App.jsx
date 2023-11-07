import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CreateBlog from "./Components/CreateBlog";
// import Container from './Components/Container'
import Header from "./Components/Header";
// import MyProfile from "./Components/MyProfile";
import Register from "./Pages/Register";
import Home from "./Components/Home";
import Login from "./Pages/Login";
import { useDispatch } from "react-redux";
import { loadUser } from "./Redux/UserSlice";
// import MyEditor from "./Components/MyEditor";
// import CreateBlog from "./Components/CreateBlog";
import MyProfile from "./Components/MyProfile";
// import Popup from "./Components/Popup/Popup";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <BrowserRouter className="App">
      {/* <Popup/> */}
      {/* <Popup /> */}
      <Header />
      {/* <MyEditor/> */}
      {/* <CreateBlog/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myProfile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
