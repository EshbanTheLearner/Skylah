import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component{
    render(){
        return(
            <div style={{ height: "75vh" }} className="container valign-wrapper hero">
            <div className="row">
                <div className="col s12 center-align">
                    <h4>
                        <b>Skylah</b> - an Intelligent Chatbot{" "}
                        
                    </h4>
                    <p className="flow-text grey-text text-darken-1">
                    This app helps in pre-diagnosis of depression in a duplex, text based environment
                    </p>
                    <br />
                    <div className="col s6">
                    <Link
                    to="/register"
                        style={{
                            width: "150px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px"
                        }}
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                    Register
                    </Link>
                    </div>
                    <div className="col s6">
                    <Link
                        to="/login" 
                        style={{
                            marginLeft: "2rem",
                            width: "150px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px"
                        }}
                        className="btn btn-large waves-effect white hoverable black-text"
                        >
                        Log In
                        </Link>
                        </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default Landing;