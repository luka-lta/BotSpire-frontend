import React, {JSX} from 'react';
import './App.css';
import Home from "./page/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./page/Login";
import Register from "./page/Register";

function App(): JSX.Element {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
