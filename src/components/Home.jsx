import React, { useEffect, useState } from "react";
import { fetchData } from "../redux/data/dataSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { setSelected } from "../redux/data/dataSlice";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  const { data } = useSelector((data) => data.data);
  const [busqueda, setBusqueda] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  function handleChange(valor) {
    if (valor === "") {
      setIsSearching(true);
      return;
    }
    if (valor === "ALL") {
      setIsSearching(true);
      setBusqueda(data);
      return;
    }
    setIsSearching(true);
    const newBusqueda = data.filter((element) =>
      element.ticker.includes(valor.toUpperCase())
    );
    setBusqueda(newBusqueda);
  }

  if (!data) {
    <h2>Loading...</h2>;
  }

  return (
    <div className="min-vh-100 text-white third-color">
      <div className="sec-color">
        <div className="container">
          <label className="form-label">Currency</label>
          <select
            onChange={(e) => {
              handleChange(e.target.value);
            }}
            className="form-select form-select-lg text-white border-1"
            defaultValue={"ALL"}
          >
            <option value="ALL">Select one</option>
            <option value="USD">USD</option>
            <option value="eur">EUR</option>
            <option value="mxn">MXN</option>
            <option value="jpy">JPY</option>
            <option value="ALL">All</option>
          </select>
        </div>

        {!isSearching ? (
          <span></span>
        ) : (
          <div
            className="d-flex my- mx-auto justify-content-center py-3  gap-4 align-items-center gap-3  rounded px-3"
            style={{ maxWidth: "45%" }}
          >
            <span className="h3 m-0">{busqueda.length}</span>
            <span className="h6 m-0"> Results</span>
          </div>
        )}
      </div>

      <div className="containe">
        <div className="row w-100 mx-auto">
          {!isSearching ? (
            data.map((element, index) => (
              <>
                
                <button
                  key={index}
                  className="item-card col-12 col-xs-6 gap-5 col-sm-6 col-md-4 col-xl-3 pt-5 bg-succes
                    d-flex flex-column border-0 bg-transperent mx-auto
                  "
                >
                  <div className="d-flex justify-content-end pe-2 w-100" >
                    <button
                      id={index}
                      onClick={() => {
                        navigate("detail");
                        dispatch(setSelected(index));
                      }}
                      className="bg-transparent border-0 text-white"
                    >
                      <i className="fa fa-arrow-right fs-2"></i>
                    </button>
                  </div>

                  <div className="d-flex flex-column align-items-end text-white w-100 pb-4 pe-2" >
                    <h3>{element.ticker}</h3>
                    <p className="fs-5"> Bid: {element.bid}</p>
                  </div>

                </button>

                
              </>
            ))
          ) : busqueda.length > 0 ? (
            busqueda.map((element, index) => (
              <div
                key={index}
                className="text-center col-12 item-card col-sm-6 col-md-4 py-3 d-flex flex-column
                gap-4"
              >
                <div className="d-flex justify-content-end pe-3">
                  <button
                    onClick={() => {
                      navigate("detail");
                      dispatch(setSelected(index));
                    }}
                    className="bg-transparent border-0 text-white"
                  >
                    <i className="fa fa-arrow-right fs-3"></i>
                  </button>
                </div>

                <div>
                  <h3>{element.ticker}</h3>
                  <p className="fs-5"> Bid: {element.bid}</p>
                </div>
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
