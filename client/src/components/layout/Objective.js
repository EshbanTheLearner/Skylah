import React, { Component } from "react";

class Objective extends Component{
    render(){
        return (
            <div style={{
                height: "75vh"
                }} className="container valign-wrapper hero">
            <div className="row">
            <div className="col s12 center-align">
            <hr style={{height: '3px'}} className="blue accent-3"></hr>
                <div className="col s4">
                    <h4>Our Objective</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus dui, ultrices id dictum nec, 
                        rutrum id dolor. Integer sagittis, libero sed sagittis interdum, ante dolor condimentum orci, 
                        sed semper enim quam sit amet sapien. Duis id nisl mattis, pulvinar dui sit amet, ornare lacus. 
                        Pellentesque sed faucibus massa. Quisque imperdiet ullamcorper tellus.</p>
                </div>
                <div className="col s4">
                    <h4>Image Section</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus dui, ultrices id dictum nec, 
                        rutrum id dolor. Integer sagittis, libero sed sagittis interdum, ante dolor condimentum orci, 
                        sed semper enim quam sit amet sapien. Duis id nisl mattis, pulvinar dui sit amet, ornare lacus.</p>
                </div>
                <div className="col s4">
                    <h4>Infographic</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus dui, ultrices id dictum nec, 
                        rutrum id dolor. Integer sagittis, libero sed sagittis interdum, ante dolor condimentum orci, 
                        sed semper enim quam sit amet sapien. Duis id nisl mattis, pulvinar dui sit amet, ornare lacus. 
                        Pellentesque sed faucibus massa. Quisque imperdiet ullamcorper tellus.</p>
                </div>
            </div>
            </div>
            </div>
        );
    }
}

export default Objective;