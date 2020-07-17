import React from "react";
import Glide from "@glidejs/glide";
import App from "../../../app.config.js";
import "./styles.scss";

class Carousel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="carousel">
                <div className="glide">
                    <div 
                        className="glide__track" 
                        data-glide-el="track">
                        <ul className="glide__slides">
                            {this.props.slides.map(slide => {
                                return (
                                    <li className="glide__slide slide">
                                        { slide }
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div 
                        className="glide__arrows" 
                        data-glide-el="controls">
                        <button 
                            className="glide__arrow glide__arrow--left" 
                            data-glide-dir="<">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <button 
                            className="glide__arrow glide__arrow--right" 
                            data-glide-dir=">">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;