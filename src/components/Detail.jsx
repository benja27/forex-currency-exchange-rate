import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useNavigate } from 'react-router-dom';

function Detail() {
  const navigate = useNavigate();
  // const complete = useSelector((data) => data.data);
  const data = useSelector((data) => data.data.data);
  const selected = useSelector((data) => data.data.selected)
    || parseInt(localStorage.getItem('selected'), 10);
  const item = data[selected];
  // console.log('complete', complete);
  // console.log('item', data[selected]);

  if (!item) {
    return (
      <div className="text-center content">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="sec-color text-white content content">
      <div className="container pb-4">
        <div className="mx-auto" style={{ maxWidth: '600px' }}>
          <div className="row gx-4">
            <div className="col-11 col-sm-8 mx-auto ">

              <div className="d-flex justify-content-between px-4 py-5 item-card">

                <div className="d-flex align-items-center justify-content-center">
                  <button
                    type="button"
                    onClick={() => {
                      navigate('/');
                    }}
                    className="bg-transparent border-0 text-white"
                  >
                    <i className="fa ps-4 fa-arrow-left fs-1 " />
                  </button>
                </div>

                <h2 className="">{item.ticker}</h2>

              </div>

              <div className="d-flex justify-content-between px-4 py-3 item-card">
                <h2>Ticket: </h2>
                <h2>{item.ticker}</h2>
              </div>
              <div className="d-flex justify-content-between px-4 py-3 item-card">
                <h2>Ask:</h2>
                <h2>{item.ask}</h2>
              </div>
              <div className="d-flex justify-content-between px-4 py-3 item-card">
                <h2> Changes:</h2>
                <h2>
                  {' '}
                  {parseFloat(item.changes).toFixed(4)}
                </h2>
              </div>
              <div className="d-flex justify-content-between px-4 py-3 item-card">
                <h2> High:</h2>
                <h2>
                  {' '}
                  {item.high}
                </h2>
              </div>

              <div className="d-flex justify-content-between px-4 py-3 item-card">
                <h2> Low: </h2>
                <h2>
                  {' '}
                  {item.low}
                </h2>
              </div>
              <div className="d-flex justify-content-between px-4 py-3 item-card">
                <h2> Open: </h2>
                <h2>
                  {' '}
                  {item.open}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
