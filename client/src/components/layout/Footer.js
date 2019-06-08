import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import SocialFollow from "../socialFollow/Social";

class Footer extends Component{
    render(){
        return (
          <footer className="page-footer white accent-3" >
            <hr style={{
              height: '3px'
            }} className="blue accent-3"></hr>
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="black-text">Follow Us</h5>
                <p className="black-text text-lighten-4">Follow us on our social media accounts and get updated on all the latest news and facts about your mental well-being.</p>
              </div>
              <div style={{
                paddingTop: '50px'
              }} className="col l4 offset-l2 s12">
                <SocialFollow />
              </div>
            </div>
          </div>
          <div className="footer-copyright blue accent-3">
            <div className="container center-align black-text">
            © 2019 Copyright
            </div>
          </div>
        </footer>
        );
    }
}

export default Footer;