import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Home";
import TodoList from "./components/TodoList";
import ContactUs from "./contact form/index";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
