import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Detail() {
  const complete = useSelector((data) => data.data);
  const data = useSelector((data) => data.data.data);
  const selected = useSelector((data) => data.data.selected) || parseInt(localStorage.getItem("selected")) ;
  const item = data[selected];
  console.log('complete',complete)
  console.log('item',data[selected])  

  if(!item){
    return (
      <div className="text-center" >
        <h2>Loading...</h2>
      </div>
    )
  }


  return (
    <div className="bg-primary text-white content content">
      <div className="container">
        <div className="text-center" >
          <h2>Real-Time Information</h2>
          <h2>Ticket: {item.ticker}</h2>
          <h2>Ask: {item.ask}</h2>
          <h2> Changes: {item.changes}</h2>
          <h2> HighL: {item.high}</h2>
          <h2> Low: {item.low}</h2>
          <h2> Open: {item.open}</h2>
        </div>
      </div>
    </div>
  );
}

export default Detail;
