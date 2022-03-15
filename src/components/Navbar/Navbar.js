import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light mb-3'>
      <div className='container'>
        <Link to='/' className='fs-3 navbar-brand'>
          <span className='text-warning fw-bold '> Rick & Morty App</span>
        </Link>

        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>

        <button
          className='navbar-toggler border-0'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <i className='fas fa-bars open fw-bold text-success'></i>
          <i className='fas fa-times close fw-bold text-success'></i>
        </button>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarNavAltMarkup'
        >
          <div className='navbar-nav fs-5'>
            <NavLink to='/' className='nav-link'>
              Caracteres
            </NavLink>
            <NavLink to='/episodes' className='nav-link'>
              Episodios
            </NavLink>
            <NavLink active className='nav-link' to='/location'>
              Ubicacion
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
