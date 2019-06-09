import React, { Component } from 'react';
import SocialFollow from "../socialFollow/Social";

class Footer extends Component{
    render(){
        return (
          <footer className="page-footer white" >
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