import $ from "jquery";
import jQuery from "jquery";
import React from "react";
import Config from "./Config";
import "../../assets/scss/stars.scss";

class Stars extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.jQuery = jQuery;
        
        require("../../public/js/vendor/flexBackground.js");
        
        $("#stars").flexBackground({
            numberOfPoints: Config.stars.numberOfPoints,
			radius: Config.stars.radius,
			interval: Config.stars.interval,
			color: Config.stars.color
        });
    }

    render() {
        return (
            <canvas style={ Config.stars.styles } id="stars"></canvas>
        );
    }
}

export default Stars;