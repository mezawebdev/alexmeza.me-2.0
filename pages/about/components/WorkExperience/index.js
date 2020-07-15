import React from "react";
import Glide from "@glidejs/glide";
import App from "../../../../app.config.js";
import "./styles.scss";

class WorkExperience extends React.Component {
    componentDidMount() {
        new Glide('.glide').mount();
    }

    render() {
        return (
            <div className="work-experience">
                <div className="glide">
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides">
                            {App.pages.about.companies.map(company => {
                                return (
                                    <li className="glide__slide slide">
                                        <img 
                                            className="company-logo"
                                            src={company.image} />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="glide__arrows" data-glide-el="controls">
                        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkExperience;