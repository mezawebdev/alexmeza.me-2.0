// SSR Components
import React from "react";
import Navigation from "../components/Navigation/Navigation";
import dynamic from "next/dynamic";
import Head from "next/head";
import "../assets/scss/reset.scss";
import "../assets/scss/global.scss";

// No SSR Components
const World = dynamic(() => import("../components/World/World"), { ssr: false });

class Default extends React.Component {
    render() {
        return (
            <div id="layout-default">
                <World />
                { this.props.children }
            </div>
        );
    }
}

export default Default;