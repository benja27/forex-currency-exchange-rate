import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";

function Detail() {
  const navigate = useNavigate()
  const complete = useSelector((data) => data.data);
  const data = useSelector((data) => data.data.data);
  const selected =
    useSelector((data) => data.data.selected) ||
    parseInt(localStorage.getItem("selected"));
  const item = data[selected];
  console.log("complete", complete);
  console.log("item", data[selected]);

  if (!item) {
    return (
      <div className="text-center content">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="bg-primary text-white content content">
      <div className="container">
        <div className="mx-auto" style={{maxWidth:"600px"}} >
          <div className="d-flex justify-content-around py-4 align-items-center">
            <button onClick={()=>{
              navigate("/")
            }} className="btn btn-dark" style={{minWidth:"100px"}}  >back</button>
            <h2 className="text-center">Real-Time Information of {item.ticker}</h2>
          </div>
          <div className="row gx-4">
            <div className="col-12 col-sm-6">
              <div className="d-flex justify-content-between px-4">
                <h2>Ticket: </h2>
                <h2>{item.ticker}</h2>
              </div>
              <div className="d-flex justify-content-between px-4">
                <h2>Ask:</h2>
                <h2>{item.ask}</h2>
              </div>
              <div className="d-flex justify-content-between px-4">
                <h2> Changes:</h2>
                <h2> {parseFloat(item.changes).toFixed(4)}</h2>
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <div className="d-flex justify-content-between px-4">
                <h2> High:</h2>
                <h2>  {item.high}</h2>
              </div>

              <div className="d-flex justify-content-between px-4">
                <h2> Low: </h2>
                <h2>  {item.low}</h2>
              </div>
              <div className="d-flex justify-content-between px-4">
                <h2> Open: </h2>
                <h2>  {item.open}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
