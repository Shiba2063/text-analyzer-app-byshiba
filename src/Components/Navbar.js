import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
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
              <Link className="nav-link active" to="/home">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ marginLeft: "40px" }}>
                About
              </Link>
            </li>

            {/* FIXED DROPDOWN */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ marginLeft: "40px", cursor: "pointer" }}
              >
                Settings
              </span>

              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" type="button">
                    DarkMode
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    LightMode
                  </button>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <button className="dropdown-item" type="button">
                    Another setting
                  </button>
                </li>
              </ul>
            </li>

            <li className="nav-item" style={{ marginLeft: "40px" }}>
              <span className="nav-link disabled">
                Disabled
              </span>
            </li>

          </ul>

          {/* DARK MODE SWITCH */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="switchCheckDefault"
              style={{ marginRight: "20px" }}
            >
              Enable DarkMode
            </label>
          </div>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>

        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.string,
  toggleMode: PropTypes.func
}

Navbar.defaultProps = {
  title: "Text Counter"
}

