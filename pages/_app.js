import React from "react";
import App from "next/app";
import dynamic from "next/dynamic";
import "../assets/scss/settings.scss";
import "../assets/scss/reset.scss";
import "../assets/scss/global.scss";
import Injector from "../assets/js/injector";
import Head from "next/head";
import { PageTransition } from "next-page-transitions";
import AppConfig from "../app.config.js";

Injector.init();

const Noop = ({ children }) => children;
const World = dynamic(() => import("../components/World/World"), { ssr: false });

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        const Layout = Component.Layout || Noop

        return (
            <Layout>
                <Head>
                    <title>ALEX MEZA | Web Developer</title>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                        key="viewport" />
                    <script src="https://code.jquery.com/pep/0.4.3/pep.js"></script>
                    <script src="/js/vendor/babylon.max.js" />
                    <script src="/js/vendor/babylon.meshwriter.min.js"></script>
                    <script src="/js/vendor/babylonjs.materials.min.js"></script>
                    <link rel="stylesheet" href="/css/vendor/glide.core.min.css"></link>
                </Head>
                <PageTransition 
                    timeout={300} 
                    classNames="page-transition">
                    <Component 
                        {...pageProps}  />
                </PageTransition>
                <style jsx global>{`
                    .page-transition-enter {
                        opacity: 0;
                    }
                    .page-transition-enter-active {
                        opacity: 1;
                        transition: opacity 300ms;
                    }
                    .page-transition-exit {
                        opacity: 1;
                    }
                    .page-transition-exit-active {
                        opacity: 0;
                        transition: opacity 300ms;
                    }`}
                </style>
                {
                    AppConfig.showWorld ? <World /> : null
                }
                <script src="https://kit.fontawesome.com/0938b6ecae.js" crossOrigin="anonymous"></script>
            </Layout>
        )
    }
}
