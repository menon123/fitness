import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper cyan darken-3" >
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center white-text"
            >
              <i className="material-icons"></i>
              FITNESS
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;