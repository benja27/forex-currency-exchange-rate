import React, { useEffect, useState } from "react";
import { fetchData } from "../redux/data/dataSlice";
import {  useSelector } from "react-redux/es/hooks/useSelector";

function Home() {
  const { data } = useSelector((data) => data.data);
  const [busqueda, setBusqueda] = useState([])
    

  function handleChange(e){
    const  newBusqueda = data.filter((element)=> (element.ticker).includes((e.target.value).toUpperCase())  )
    setBusqueda(newBusqueda)
  }

  return (
    <div className="bg-primary min-vh-100 text-white py-3">
      <div className="container">
        <div className="d-flex justify-content-center gap-5 check">
          <h2 className="justify-self-center">Search</h2>
          <input onChange={(e)=>{
            handleChange(e)
          }} className="form-control" type="text" name="" id="" />
          <h5>hola</h5>
        </div>
      </div>
      <div className="container">
        <div className="row gy-5 gx-5 ards-container chec">
          { busqueda.length>0 ? (
          busqueda.map((element,index) => (            
            <div key={index}  className="text-center col-6 col-sm-6 col-md-4 py-4 bg-succes">
              <h3>{element.ticker}</h3>
              <p className="fs-5"> Bid: {element.bid}</p>
              <button className="btn btn-dark">Get more info!</button>
            </div>
          ))
          ) : (
            data.map((element,index) => (
              <div key={index}  className="text-center col-6 col-sm-6 col-md-4 py-4 bg-succes">
                <h3>{element.ticker}</h3>
                <p className="fs-5"> Bid: {element.bid}</p>
                <button className="btn btn-dark">Get more info!</button>
              </div>
            ))
          )

          }
        </div>
      </div>
    </div>
  );
}

export default Home;
