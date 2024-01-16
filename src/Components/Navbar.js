import React from 'react'
import logo from "../images/rapid news logo.png";
import {
    NavLink
  } from "react-router-dom";

  
const Navbar=(props)=> {
    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} fixed-top`}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"><img src={logo} style={{width:30, height:30}} alt="news logo"/> RapidNews</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink style={({ isActive }) => ({
                                color: isActive ? '#fff' : '',
                                background: isActive ? '#282C35' : '',
                                borderRadius: isActive ? '7px' : ''
                                })} className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={({ isActive }) => ({
                                color: isActive ? '#fff' : '',
                                background: isActive ? '#282C35' : '',
                                borderRadius: isActive ? '7px' : ''
                                })} className="nav-link" to="/health">Health</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={({ isActive }) => ({
                                color: isActive ? '#fff' : '',
                                background: isActive ? '#282C35' : '',
                                borderRadius: isActive ? '7px' : ''
                                })} className="nav-link" to="/business">Business</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={({ isActive }) => ({
                                color: isActive ? '#fff' : '',
                                background: isActive ? '#282C35' : '',
                                borderRadius: isActive ? '7px' : ''
                                })} className="nav-link" to="/entertainment">Entertainment</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={({ isActive }) => ({
                                color: isActive ? '#fff' : '',
                                background: isActive ? '#282C35' : '',
                                borderRadius: isActive ? '7px' : ''
                                })} className="nav-link" to="/sports">Sports</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={({ isActive }) => ({
                                color: isActive ? '#fff' : '',
                                background: isActive ? '#282C35' : '',
                                borderRadius: isActive ? '7px' : ''
                                })} className="nav-link" to="/science">Science</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={({ isActive }) => ({
                                color: isActive ? '#fff' : '',
                                background: isActive ? '#282C35' : '',
                                borderRadius: isActive ? '7px' : ''
                                })} className="nav-link" to="/technology">Technology</NavLink>
                        </li>
                    </ul>
                </div>
                    <div className="form-check form-switch">
                        <input onClick={props.handleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className={`form-check-label text-${props.mode==="light"? "dark":"light"}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
            </div>
        </nav>
      </div>
    )
}

export default Navbar

// {`form-check-label text-${props.mode}`}