import React from "react";
import Link from "next/link";
import App from "../../../app.config";
import HomeMenu from "../../HomeMenu";
import "./styles.scss";
import { useRouter } from "next/router";

export default function HomeNavigation(props) {
    const router = useRouter();

    console.log(router);

    return (
        <div 
            id="home-navigation"
            className={ props.type }>
            <div className={`${ props.type } background`}>
                <span></span>
            </div>
            <div className={`${ props.type } name`}>
                <span className={`${ props.type } text-3d header`}>
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
                <span className={`${ props.type } text-3d subheader`}>
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
            <div className={`${ props.type } social`}>
                <a href="#">
                    <i className="fab fa-github"></i>
                </a>
                <a href="#">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                    <i className="fab fa-codepen"></i>
                </a>
                <a href="#">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
            <div className={`${ props.type } menu`}>
                { 
                    App.navigation.items.map((value, i) => {
                        return (
                            <span className={ router.pathname === value.path ? "active" : "" }>
                                <Link
                                    key={ i }
                                    href={ value.path }>
                                    <button>{ value.text }</button>
                                </Link>
                            </span>
                        );
                    })
                }
            </div>
            <HomeMenu type={props.type} />
        </div>
    );
}