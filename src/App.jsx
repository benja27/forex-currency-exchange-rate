import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "./redux/data/dataSlice";


import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100" >
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="detail" element={ <Detail></Detail> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
