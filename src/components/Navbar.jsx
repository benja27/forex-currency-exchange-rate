import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar text-white sec-color">
      <div className="container">

        <div className="row d-flex w-100">
          <div className="col-7 d-flex justify-content-end">
            <Link to="/">
              <h2 className="text-white">Forex</h2>
            </Link>
          </div>

          <div className="col-5 d-flex justify-content-end align-items-center gap-4">
            <i className="fas fa-microphone" />
            <i className="fas fa-cog" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
