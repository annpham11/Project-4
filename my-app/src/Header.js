import React from 'react'
import {Link} from 'react-router-dom'; 

export const Header = () => {
  return (
    <header> 
       <div className="container-fluid" id="title">
      <nav className="navbar navbar-expand-lg navbar-dark">

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav"> 
          <ul className="navbar-nav ml-auto text-right" id="navbarElement">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/watchlist">
                Watchlist
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/watched">
                Watched
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">
                + Add
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    </header>
  )
}
