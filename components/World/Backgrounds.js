import React from "react";
import Config from "./Config";
import "../../public/js/vendor/granim.min.js";
import "../../assets/scss/backgrounds.scss";

class Backgrounds extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.colorBackground = new Granim({
            element: '#bottom-color-background',
            direction: 'top-bottom',
            isPausedWhenNotInView: true,
            states : {
                "default-state": {
                    gradients: Config.backgrounds.bottomColorBackground.gradients
                }
            }
        });
    }

    render() {
        return (
            <div 
                style={ Config.backgrounds.style } 
                id="backgrounds">
                <div 
                    style={ Config.backgrounds.centerGradientBackground.style } 
                    id="gradient-center-background">    
                </div>
                <canvas 
                    style={ Config.backgrounds.bottomColorBackground.style } 
                    id="bottom-color-background">    
                </canvas>
            </div>
        );
    }
}

export default Backgrounds;