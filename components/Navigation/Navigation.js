import React from "react";
import Link from "next/link";
import "./Navigation.scss";

class Navigation extends React.Component {
    render() {
        return (
            <div id="navigation">
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/portfolio">
                    <a>Portfolio</a>
                </Link>
            </div>
        );
    }
}

export default Navigation;