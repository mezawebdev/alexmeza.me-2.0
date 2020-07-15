import React from "react";
import "./styles.scss";

class Text extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p className={`text ${ this.props.align || '' }`}>
                { this.props.children }
            </p>
        );
    }
}

export default Text;