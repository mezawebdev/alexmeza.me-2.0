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
                <Head>
                    <title>ALEX MEZA | Web Developer</title>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                        key="viewport" />
                    <script src="https://cdn.babylonjs.com/babylon.js" />
                    <script src="https://cdn.babylonjs.com/materialsLibrary/babylonjs.materials.min.js"></script>
                    <script src="/js/vendor/babylon.dynamicTerrain.min.js" />
                </Head>
                <World />
                { this.props.children }
            </div>
        );
    }
}

export default Default;