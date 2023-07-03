import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/mainStore";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "./redux/data/dataSlice";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
