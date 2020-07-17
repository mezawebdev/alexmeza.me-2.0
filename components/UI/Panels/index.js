import React from "react";
import "./styles.scss";

class Panels extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="panels">
                {this.props.children}
            </div>
        );
    }
}

export default Panels;