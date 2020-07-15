import React from "react";
import "./styles.scss";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h2 className={`panel-header ${ this.props.align || '' }`}>
                { this.props.children }
            </h2>
        );
    }
}

export default Header;