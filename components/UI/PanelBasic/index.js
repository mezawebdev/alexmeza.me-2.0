import React from "react";
import "./styles.scss";

class PanelBasic extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="panel-basic">
                { this.props.children }
            </div>
        );
    }
}

export default PanelBasic;