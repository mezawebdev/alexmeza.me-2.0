import React from "react";
import Default from "../layouts/default";
import Link from "next/link";
import HomeMenu from "../components/HomeMenu";
import App from "../app.config";
import "./styles.scss";

let navigation = [];

for (let i = 1; i < App.navigation.items.length; i++) {
    navigation.push(App.navigation.items[i]);
}

class Home extends React.Component {
    render() {
        return (
            <div
                className="page" 
                id="home">
                <HomeMenu />
            </div>
        )
    }
}

Home.Layout = Default;

export default Home;