import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const handleChange=(changeEvent)=>{
    var color=changeEvent.target.value;
    props.colorChange(color);
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode }`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Home</a>
          </li>
          {/*<li className="nav-item">
            <a className="nav-link" href="/about">{props.aboutText}</a>
          </li>*/}
        </ul>
        {/*<form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>*/}
        <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="col" value="purple" onChange={handleChange}/>
            <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexRadioDefault1">
              Purple
            </label>
          </div>
          <div className="form-check mx-3">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="col" value="green" onChange={handleChange}/>
            <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexRadioDefault2">
              Green
            </label>
        </div>
        <div className={`form-check form-switch mx-4 text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode}  id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
            </div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {title:PropTypes.string.isRequired,
                    aboutText: PropTypes.string
                }

Navbar.defaultProps = {
    title: 'Set Title Here',
    aboutText: 'Set AboutText Here'
}