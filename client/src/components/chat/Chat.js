import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
//import { Widget } from 'react-chat-widget';
import { Link } from "react-router-dom";
import './chat.css';
//import 'react-chat-widget/lib/styles.css';

class Chat extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    //const { user } = this.props.auth;
return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">

          <div className="chat">
  <div className="chat-title">
    <h1>Skylah</h1>
    <h2>Bot</h2>
    <figure className="avatar">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" alt="Profile"/></figure>
  </div>
  <div className="messages">
    <div className="messages-content"></div>
  </div>
  <div className="message-box">
    <textarea type="text" className="message-input" placeholder="Type message..."></textarea>
    <button className="message-submit"> Send</button>
  </div>

</div>
<div className="bg"></div>
{/*
            <div className="col s6"> 
            <Link to="/dashboard" className="btn btn-large waves-effect waves-light hoverable white black-text accent-3"
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              //marginTop: "1rem"
            }}>
            <i className="material-icons left">keyboard_backspace</i> Back
            </Link>
            </div>
            <div className="col s6"> 
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                //marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable red accent-3">
              Logout
            </button>
            </div>*/}
          </div>
        </div>
      </div>
    );
  }
}
Chat.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Chat);