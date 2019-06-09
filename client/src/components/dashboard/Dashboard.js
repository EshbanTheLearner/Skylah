import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";

class Dashboard extends Component{
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render(){
        const { user } = this.props.auth;

        return(
            <div style={{ height: "75vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            <b>Hey there,</b> {user.name.split(" ")[0]}
                            <p className="flow-text grey-text text-darken-1">
                                To chat with the bot, please click the {" "}
                                <span style={{ fontFamily: "monospace" }}>CHAT</span> button
                            </p>
                        </h4>
                        <div className="col s6"> 
                    <Link
                    to="/chat"
                        style={{
                            width: "150px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px"
                        }}
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                    Chat
                    </Link>
                    </div>
                    <div className="col s6">
                        <button
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px"
                                //marginTop: "1rem"
                            }}
                            onClick={this.onLogoutClick}
                            className="btn btn-large waves-effect white hoverable black-text accent-3">
                                Logout
                            </button>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.PropTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state =>({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);