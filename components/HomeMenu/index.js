import React from "react";
import "./styles.scss";
import Link from "next/link";
import App from "../../app.config";
import Button from "../UI/Button";

const Navigation = [];

for (let i = 1; i < App.navigation.items.length; i++) {
    Navigation.push(App.navigation.items[i]);
}

class HomeMenu extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <div 
                className={this.props.type}
                id="home-menu">
                { 
                    Navigation.map((value, i) => {
                        return (
                            <Link
                                key={ i }
                                href={ value.path }>
                                <Button>
                                    { value.text }
                                </Button>
                            </Link>
                        );
                    })
                }
            </div>
        );
    }
}

export default HomeMenu;