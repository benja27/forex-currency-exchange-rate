import React, { useEffect, useState } from "react";
import { fetchData } from "../redux/data/dataSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { setSelected } from "../redux/data/dataSlice";
import { useDispatch } from "react-redux";

function Home() {

  const dispatch = useDispatch()



  const { data } = useSelector((data) => data.data);
  const [busqueda, setBusqueda] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  function handleChange(valor) {
    if (valor === "") {
      setIsSearching(false);
      return;
    }
    setIsSearching(true);
    const newBusqueda = data.filter((element) =>
      element.ticker.includes(valor.toUpperCase())
    );
    setBusqueda(newBusqueda);
  }

  return (
    <div className="bg-primary min-vh-100 text-white py-3">
      <div className="container">
        <div className="d-flex justify-content-center gap-2">
          <h2 className="justify-self-center">Search</h2>
          <input
            onChange={(e) => {
              handleChange(e.target.value);
            }}
            className="form-control flex-grow-1"
            type="text"
          />
        </div>
        {!isSearching ? (
          <h2></h2>
        ) : (
          <div className="d-flex my-3 mx-auto justify-content-center gap-4 align-items-center gap-3 bg-dark rounded px-3" style={{ maxWidth:"45%"  }}>
            <span className="h3 m-0">{busqueda.length}</span>
            <span className="h6 m-0"> Results</span>
          </div>
        )}
      </div>

      <div className="container">
        <div className="row gy-5 gx-5 ards-container chec">
          {!isSearching ? (
            data.map((element, index) => (
              <div
                key={index}                
                className="text-center col-12 col-sm-6 col-md-4 col-xl-3 py-4 bg-succes"
              >
                <h3>{element.ticker}</h3>
                <p className="fs-5"> Bid: {element.bid}</p>
                <button

                  id={index}
                  onClick={() => {
                    navigate("detail");
                    dispatch(setSelected(index))                    
                  }}
                  className="btn btn-dark"
                >
                  Get more info!
                </button>
              </div>
            ))
          ) : busqueda.length > 0 ? (
            busqueda.map((element, index) => (
              <div
                key={index}
                className="text-center col-12 col-sm-6 col-md-4 py-4 bg-succes"
              >
                <h3>{element.ticker}</h3>
                <p className="fs-5"> Bid: {element.bid}</p>
                <button  
                  onClick={()=>{
                    navigate("detail");
                    dispatch(setSelected(index))                    
                  }}
                
                className="btn btn-dark">Get more info!</button>
              </div>
            ))
          ) : (
            <h2>no hay resultados</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
