import React from "react";
import "./styles.scss";

const panelCanvas = {
    init(panel, canvas) {
        this.panel = panel;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.borderWidth = 4;
        this.borderColor = "rgba(115, 188, 205, 1)";
        this.backgroundColor = "rgba(3, 23, 30, 0.5)";
        this.set();
    },
    set() {
        this.canvas.width = this.panel.offsetWidth;
        this.canvas.height = this.panel.offsetHeight;
        this.draw();
    },
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.beginPath();
        this.ctx.moveTo(0, 15);
        this.ctx.lineTo(0, this.canvas.height - 10);
        this.ctx.lineTo(10, this.canvas.height);
        this.ctx.lineTo(this.canvas.width - 20, this.canvas.height);
        this.ctx.lineTo(this.canvas.width, this.canvas.height - 20);
        this.ctx.lineTo(this.canvas.width, 7);
        this.ctx.lineTo(this.canvas.width - 7, 0);
        this.ctx.lineTo(15, 0);
        this.ctx.lineTo(0, 15);
        this.ctx.lineWidth = this.borderWidth;
        this.ctx.strokeStyle = this.borderWidth;
        this.ctx.fillStyle = this.backgroundColor;
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.moveTo(0, 15);
        this.ctx.lineTo(0, this.canvas.height - 10);
        this.ctx.lineTo(10, this.canvas.height);
        this.ctx.lineTo(this.canvas.width - 20, this.canvas.height);
        this.ctx.lineTo(this.canvas.width, this.canvas.height - 20);
        this.ctx.lineTo(this.canvas.width, 7);
        this.ctx.lineTo(this.canvas.width - 7, 0);
        this.ctx.lineTo(15, 0);
        this.ctx.lineTo(0, 15);
        this.ctx.lineWidth = this.borderWidth;
        this.ctx.strokeStyle = this.borderColor;
        this.ctx.stroke();
        this.ctx.closePath();
    }
}

class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.panel = React.createRef();
        this.canvas = React.createRef();
    }

    componentDidMount() {
        panelCanvas.init(this.panel.current, this.canvas.current);
    }

    render() {
        return (
            <div
                ref={this.panel} 
                className="panel">
                <canvas
                    ref={this.canvas} 
                    className="panel-canvas">
                </canvas>
                { this.props.children }
            </div>
        );
    }
}

export default Panel;