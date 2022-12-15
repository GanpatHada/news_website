import React, { Component } from 'react'
import './Navbar.css'
import {
   
    NavLink
  } from "react-router-dom";
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-primary text-light fixed-top py-0" >
                    <div className="container-fluid ">
                        <a className="navbar-brand m-0" href="/">
                            <img src="logo.png" alt="logo" width="40" height="44"  />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse mb-0" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-0 mb-lg-0 ">
                                <li className="nav-item ">
                                    <NavLink className="nav-link mb-0" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Business">Business</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link "to="/health">Health</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link "to='/Entertainment'>Entertainment</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link "to="/Sports">Sports</NavLink>
                                </li>
                                <li className="nav-item ">
                                    <NavLink className="nav-link "to="/Technology">Technology</NavLink>
                                </li>
                                

                            </ul>
                            <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                        <button className="btn " type="button">Search</button>
                           </form>


                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
