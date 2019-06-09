import React, { Component } from "react";
import EFollow from "../socialFollow/Eshban";
import TFollow from "../socialFollow/Taymoor";

class About extends Component{
    render(){
        return(
            <div style={{height:'75vh'}} className="container valign-wrapper hero">
                <div className="row">
                    <div className="col s12 center-align">
                        <div className="col s5 card">
                            <div className="card-image">
                                <img src=''></img>
                                <span class="card-title">Eshban Suleman</span>
                            </div>
                            <div className="card-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus dui, ultrices id dictum nec, 
                        rutrum id dolor. Integer sagittis, libero sed sagittis interdum</p>
                            </div>
                            <div className="card-action">
                                <EFollow />
                            </div>
                        </div>
                        <div className="col s5 offset-s2 card">
                        <div className="card-image">
                                <img src=''></img>
                                <span class="card-title">Taymoor Akbar</span>
                            </div>
                            <div className="card-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus dui, ultrices id dictum nec, 
                        rutrum id dolor. Integer sagittis, libero sed sagittis interdum</p>
                            </div>
                            <div className="card-action">
                                <TFollow />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;