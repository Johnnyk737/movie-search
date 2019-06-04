import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './styles/topbar.css'

class TopBar extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="top-bar">
        <div className="container center vert-align">
          {/* <Router> */}
            <div className="top-bar-title">
              <Link to="/">
                Movie Search
              </Link>
            </div>
            <nav className="top-bar-links">
              <ul>
                <li>
                  <Link to='/search'>
                  Search Movies
                  </Link>
                </li>
                <li>My Movie List</li>
              </ul>
            </nav>
          {/* </Router> */}
        </div>
      </div>
    )
  }
}

export default TopBar
