import React from "react";
import "./styles.scss";

const panelCanvas = {
    init(button, canvas) {
        this.button = button;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.borderWidth = 2.5;
        this.borderRadius = 5;
        this.borderColor = "rgba(0, 171, 170, 1)";
        this.backgroundColor = "rgba(0, 55, 68, 0.5)";
        this.set();
    },
    set() {
        this.canvas.width = this.button.offsetWidth;
        this.canvas.height = this.button.offsetHeight;
        this.draw1();
    },
    draw1() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.beginPath();
        this.ctx.moveTo(0, this.borderRadius);
        this.ctx.lineTo(this.borderRadius, 0);
        this.ctx.lineTo(this.canvas.width - this.borderRadius, 0);
        this.ctx.lineTo(this.canvas.width, this.borderRadius);
        this.ctx.lineTo(this.canvas.width, this.canvas.height - this.borderRadius);
        this.ctx.lineTo(this.canvas.width - this.borderRadius, this.canvas.height);
        this.ctx.lineTo(this.borderRadius, this.canvas.height);
        this.ctx.lineTo(0, this.canvas.height - this.borderRadius);
        this.ctx.lineTo(0, this.borderRadius);
        this.ctx.lineWidth = this.borderWidth;
        this.ctx.strokeStyle = this.borderColor;
        this.ctx.fillStyle = this.backgroundColor;
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(0, this.borderRadius);
        this.ctx.lineTo(this.borderRadius, 0);
        this.ctx.lineTo(this.canvas.width - this.borderRadius, 0);
        this.ctx.lineTo(this.canvas.width, this.borderRadius);
        this.ctx.lineTo(this.canvas.width, this.canvas.height - this.borderRadius);
        this.ctx.lineTo(this.canvas.width - this.borderRadius, this.canvas.height);
        this.ctx.lineTo(this.borderRadius, this.canvas.height);
        this.ctx.lineTo(0, this.canvas.height - this.borderRadius);
        this.ctx.lineTo(0, this.borderRadius);
        this.ctx.lineWidth = this.borderWidth;
        this.ctx.strokeStyle = this.borderColor;
        this.ctx.stroke();
        this.ctx.closePath();
    },
    draw2() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.beginPath();
        this.ctx.moveTo(0, this.borderRadius);
        this.ctx.lineTo(this.borderRadius, 0);
        this.ctx.lineTo(this.canvas.width - this.borderRadius, 0);
        this.ctx.lineTo(this.canvas.width, this.borderRadius);
        this.ctx.lineTo(this.canvas.width, this.canvas.height - this.borderRadius);
        this.ctx.lineTo(this.canvas.width - this.borderRadius, this.canvas.height);
        this.ctx.lineTo(this.borderRadius, this.canvas.height);
        this.ctx.lineTo(0, this.canvas.height - this.borderRadius);
        this.ctx.lineTo(0, this.borderRadius);
        this.ctx.lineWidth = this.borderWidth;
        this.ctx.strokeStyle = this.borderColor;
        this.ctx.fillStyle = this.backgroundColor;
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(0, this.borderRadius);
        this.ctx.lineTo(this.borderRadius, 0);
        this.ctx.lineTo(this.canvas.width - this.borderRadius, 0);
        this.ctx.lineTo(this.canvas.width, this.borderRadius);
        this.ctx.moveTo(this.canvas.width, this.canvas.height - this.borderRadius);
        this.ctx.lineTo(this.canvas.width - this.borderRadius, this.canvas.height);
        this.ctx.lineTo(this.borderRadius, this.canvas.height);
        this.ctx.lineTo(0, this.canvas.height - this.borderRadius);
        this.ctx.lineWidth = this.borderWidth;
        this.ctx.strokeStyle = this.borderColor;
        this.ctx.fillStyle = this.backgroundColor;
        this.ctx.stroke();
        this.ctx.closePath();
    }
}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.button = React.createRef();
        this.canvas = React.createRef();
    }

    componentDidMount() {
        panelCanvas.init(this.button.current, this.canvas.current);
    }

    render() {
        return (
            <div
                ref={this.button}
                href="#"
                className="button-ui" 
                onClick={this.props.onClick}>
                <canvas
                    ref={this.canvas} 
                    className="button-canvas">
                </canvas>
                <span>{ this.props.children }</span>
            </div>
        );
    }
}

export default Button;