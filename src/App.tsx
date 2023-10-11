import React, {JSX} from 'react';
import './App.css';
import {Route, Routes} from "react-router";
import Home from "./page/Home";

function App(): JSX.Element {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
