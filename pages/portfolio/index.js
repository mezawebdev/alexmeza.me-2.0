import React from "react";
import Default from "../../layouts/default";
import Header from "../../components/UI/PanelBasic/Header";
import "./styles.scss";

class Portfolio extends React.Component {
    render() {
        return (
            <div
                className="page" 
                id="portfolio">
                <Header align="center">
                    PORTFOLIO
                </Header>
            </div>
        )
    }
}

Portfolio.Layout = Default;

export default Portfolio;