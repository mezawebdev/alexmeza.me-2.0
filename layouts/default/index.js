import React from "react";
import Router from "next/router";
import HomeNavigation from "../../components/Navigation/Home";
import "./styles.scss";

class Default extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navType: "default"
        }

        Router.events.on("routeChangeComplete", url => {
            this.setNavigation(url);
        });
    }

    componentDidMount() {
        this.setNavigation();
    }

    setNavigation(url) {
        let navType;
        url = url || Router.router.route;

        if (url === "/") {
            navType = "home";
        } else {
            navType = "alt";
        }

        this.setState({
            navType
        });
    }

    render() {
        return (
            <div id="layout-default">
                <div className="container">
                    <HomeNavigation type={this.state.navType} />
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default Default;