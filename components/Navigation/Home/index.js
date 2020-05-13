import React from "react";
import Link from "next/link";
import App from "../../../app.config";
import HomeMenu from "../../HomeMenu";
import "./styles.scss";


class HomeNavigation extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <div 
                id="home-navigation"
                className={ this.props.type }>
                <div className={`${ this.props.type } background`}></div>
                <div className={`${ this.props.type } name`}>
                    <span className={`${ this.props.type } text-3d header`}>
                        {/* ALEX MEZA */}
                        <span>A</span>
                        <span>L</span>
                        <span>E</span>
                        <span>X</span>
                        &nbsp;
                        <span>M</span>
                        <span>E</span>
                        <span>Z</span>
                        <span>A</span>
                    </span>
                    <br />
                    <span className={`${ this.props.type } text-3d subheader`}>
                        {/* Web Developer */}
                        <span>W</span>
                        <span>E</span>
                        <span>B</span>
                        &nbsp;
                        <span>D</span>
                        <span>E</span>
                        <span>V</span>
                        <span>E</span>
                        <span>L</span>
                        <span>O</span>
                        <span>P</span>
                        <span>E</span>
                        <span>R</span>
                    </span>
                </div>
                <div className={`${ this.props.type } menu`}>
                    { 
                        App.navigation.items.map((value, i) => {
                            return (
                                <Link
                                    key={ i }
                                    href={ value.path }>
                                    <button>{ value.text }</button>
                                </Link>
                            );
                        })
                    }
                </div>
                <HomeMenu type={this.props.type} />
            </div>
        )
    }
}

export default HomeNavigation;