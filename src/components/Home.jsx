import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelected, setSearch } from '../redux/data/dataSlice';

function Home() {
  const dispatch = useDispatch();

  const {
    data, search, isLoading,
  } = useSelector((data) => data.data);
  const navigate = useNavigate();

  function handleChange(valor) {
    if (valor === 'ALL') {
      dispatch(setSearch(data));
      return;
    }
    // setIsSearching(true);
    const newBusqueda = data.filter((element) => element.ticker.includes(valor.toUpperCase()));
    dispatch(setSearch(newBusqueda));
  }

  if (isLoading) {
    return <h2>Loading data...</h2>;
  }

  return (
    <div className="min-vh-100 text-white third-color">
      <div className="sec-color">
        <div className="container">
          <h4 htmlFor="coin" className="form-label">
            Currency
          </h4>
          <select
            onChange={(e) => {
              handleChange(e.target.value);
            }}
            className="form-select form-select-lg text-white border-1"
            defaultValue="ALL"
            id="coin"
          >
            <option id="coin" value="ALL">
              Select one
            </option>
            <option value="USD">USD</option>
            <option value="eur">EUR</option>
            <option value="mxn">MXN</option>
            <option value="jpy">JPY</option>
            <option value="GBP">GBP</option>
            <option value="chf">CHF</option>
            <option value="cad">CAD</option>
            <option value="aud">AUD</option>
            <option value="ALL">All</option>
          </select>
        </div>

        {data.length === 124 ? (
          <div
            className="d-flex  mx-auto justify-content-center py-3  gap-4 align-items-center gap-3  rounded px-3"
            style={{ maxWidth: '45%' }}
          >
            <span className="h3 m-0">{search.length}</span>
            <span className="h6 m-0"> Options</span>
          </div>
        ) : (
          <div
            className="d-flex my- mx-auto justify-content-center py-3  gap-4 align-items-center gap-3  rounded px-3"
            style={{ maxWidth: '45%' }}
          >
            <span className="h3 m-0">{search.length}</span>
            <span className="h6 m-0"> Results</span>
          </div>
        )}
      </div>

      <div className="containe">
        <div className="row w-100 mx-auto paralel-container">
          {search.length > 0 ? (
            search.map((element, index) => (
              <button
                type="button"
                key={Math.random()}
                id={index}
                onClick={() => {
                  navigate('detail');
                  dispatch(setSelected(index));
                }}
                className="item-card col-12 col-xs-6 gap-5 col-sm-6 col-md-4 col-xl-3 pt-5
                    d-flex flex-column border-0 bg-transperent mx-auto rounded paralel-item
                  "
              >
                <div className="d-flex justify-content-end pe-2 w-100">
                  <div>
                    <i className="fa text-white fa-arrow-right fs-2" />
                  </div>
                </div>

                <div className="d-flex flex-column align-items-end text-white w-100 pb-4 pe-2">
                  <h3>{element.ticker}</h3>
                  <p className="fs-5">
                    {' '}
                    Bid:
                    {element.bid}
                  </p>
                </div>
              </button>
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
