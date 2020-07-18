import React from "react";
import Default from "../../layouts/default";
import Panel from "../../components/UI/Panel";
import Header from "../../components/UI/PanelBasic/Header";
import "./styles.scss";

class Contact extends React.Component {
    render() {
        return (
            <div
                className="page" 
                id="contact">
                <Panel>
                    <Header align="center">
                        CONTACT
                    </Header>
                </Panel>
            </div>
        )
    }
}

Contact.Layout = Default;

export default Contact;