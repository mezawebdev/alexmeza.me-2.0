import React from "react";
import Default from "../../layouts/default";
import Panel from "../../components/UI/Panel";
import Header from "../../components/UI/PanelBasic/Header";
import Text from "../../components/UI/PanelBasic/Text";
import "./styles.scss";
import WorkExperience from "./components/WorkExperience";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                className="page" 
                id="about">
                <Panel className="about-me">
                    <Header align="center">
                        ABOUT
                    </Header>
                    <div className="profile-picture-container">
                        <img
                            className="profile-picture" 
                            src="images/profile-1.jpg" />
                    </div>
                    <Text align="center">
                        My name is Alex Meza, I am a full-stack web developer from San Diego, California. I love creating user-friendly web applications and interfaces that bring long-lasting emotional connections with&nbsp;their&nbsp;users.
                    </Text>
                </Panel>
                <Panel>
                    <Header align="center">
                        Brands I've Worked For
                    </Header>
                    <WorkExperience />
                </Panel>
            </div>
        )
    }
}

About.Layout = Default;

export default About;