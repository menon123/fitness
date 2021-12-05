import React, { Component } from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
class dash1 extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
              
            <h4>
              <b className="flow-text grey-text text-darken-1">Hey there, {user.name.split(" ")[0]}</b>
              <p className="flow-text grey-text text-darken-1">
                hello
              </p>
            </h4>
            
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable cyan darken-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}
dash1.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(dash1);
