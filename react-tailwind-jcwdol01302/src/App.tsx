import {Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Todo from './pages/todo';
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/todo" element={<Todo />}></Route>
    </Routes>
    </>
  );
}

export default App;
