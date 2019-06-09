import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component{
    render(){
        return(
            /*
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <div className="nav-wrapper white">
                        <Link
                            to="/"
                            style={{
                                fontFamily: "monospace"
                            }}
                            className="col s5 brand-logo center black-text"
                            >
                            <i className="material-icons">code</i>
                            SKYLAH
                            </Link>
                    </div>
                </nav>
            </div>
            */
            <div className="navbar-fixed">
            <nav className="z-depth-0"> 
            <div className="nav-wrapper white">
              <Link to="/"
              style={{
                  paddingLeft: '10px'
              }}
               className="brand-logo center black-text"><b><i className="material-icons">code</i>SKYLAH</b></Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                    <Link 
                    to ="/"
                    className="black-text waves-effect waves-light hoverable accent-3">Home</Link>
                </li>
                <li>
                    <Link 
                    to ="/objective"
                    className="black-text waves-effect waves-light hoverable">Objective</Link>
                </li>
                <li>
                    <Link 
                    to ="/about"
                    className="black-text waves-effect waves-light hoverable">About Us</Link>
                </li>
                <li>
                    <Link 
                    to ="/joinus"
                    className="black-text waves-effect waves-light hoverable">Join Us</Link>
                </li>
                {/*
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
                */}
              </ul>
            </div>
          </nav>
          </div>
        );
    }
}

export default Navbar;