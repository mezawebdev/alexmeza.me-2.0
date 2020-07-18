import React from "react";
import Default from "../../layouts/default";
import Panel from "../../components/UI/Panel";
import Header from "../../components/UI/PanelBasic/Header";
import "./styles.scss";

class Portfolio extends React.Component {
    render() {
        return (
            <div
                className="page" 
                id="portfolio">
                <Panel>
                    <Header align="center">
                        PORTFOLIO
                    </Header>
                </Panel>
            </div>
        )
    }
}

Portfolio.Layout = Default;

export default Portfolio;