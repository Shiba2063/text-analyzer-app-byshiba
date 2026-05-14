import React from 'react'
import PropTypes from 'prop-types' //impt
import { Link } from 'react-router-dom'

// export default function Navbar({ title = "Second react", link = "Learn" })
export default function Navbar(props)
 {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <span className="navbar-brand">
  <b>{props.title}</b>
</span>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" style={{ marginLeft: "40px" }}>
          <Link className="nav-link active" aria-current="page" to="/home">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" style={{ marginLeft: "40px" }}>
            About
          </Link>
        </li>
        <li className="nav-aitem dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ marginLeft: "40px" }}>
            Settings
          </Link>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                DarkMode
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                LightMode
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another setting
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item" style={{ marginLeft: "40px" }}>
          <a className="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>
<div className={`form-check form-switch text-${props.mode===`light`?`dark`:`light`}`} >
  <input
    className="form-check-input"
    type="checkbox"
    role="switch"
    id="switchCheckDefault"
    onClick={props.toggleMode}
  />
  <label className="form-check-label" htmlFor="switchCheckDefault" style={{ marginRight: "20px" }}>
    Enable DarkMode
  </label>
</div>

      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-primary" type="submit">
          Search
        </button>
      </form>
      
    </div>
  </div>
  
</nav>

    </div>
  )
}
Navbar.propTypes = {
   title: PropTypes.string,

 }

Navbar.defaultProps =
 {
   title: "Text Counter"
  
} 

