import React, { Component } from "react";
import { Link } from "react-router-dom";
import SocialFollow from "../socialFollow/Social";

class JoinUs extends Component{
    render(){
        return(
            <div className="container valign-wrapper hero">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>Join Us Today</h4>
                        <p className="flow-text grey-text text-darken-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus dui, ultrices id dictum nec, rutrum id dolor. Integer sagittis, libero sed sagittis interdum, ante dolor condimentum orci, sed semper enim quam sit amet sapien. Duis id nisl mattis, pulvinar dui sit amet, ornare lacus. Pellentesque sed faucibus massa. Quisque imperdiet ullamcorper tellus</p>
                        <br/>
                            <SocialFollow />
                    </div>
                </div>
            </div>
        );
    }
}

export default JoinUs;