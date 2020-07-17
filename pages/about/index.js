import React from "react";
import Default from "../../layouts/default";
import Panel from "../../components/UI/Panel";
import Panels from "../../components/UI/Panels";
import Header from "../../components/UI/PanelBasic/Header";
import Text from "../../components/UI/PanelBasic/Text";
import Carousel from "../../components/Widgets/Carousel";
import App from "../../app.config.js";
import Glide from "@glidejs/glide";
import utils from "../../assets/js/utils";
import Swiper from 'react-id-swiper';
import "swiper/swiper.scss";
import "./styles.scss";

const companySlides = App.pages.about.companies.map(company => {
    return (
        <img 
            className="company-logo"
            src={company.image} />
    );
}); 

const swiperParams = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 25,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
}

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     new Glide(".glide", {
    //         autoplay: 4000,
    //         type: "carousel",
    //         interval: 5000
    //     }).mount();
    // }

    render() {
        return (
            <div
                className="page" 
                id="about">
                <Swiper {...swiperParams}>
                    <Panel>
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
                    <Panel classes={["work-experience"]}>
                        <Header align="center">
                            Brands I've Worked For
                        </Header>
                        <Carousel slides={companySlides} />
                    </Panel>
                    <Panel>
                        <Header align="center">
                            Tools I Frequent
                        </Header>
                    </Panel>
                </Swiper>
            </div>
        )
    }
}

About.Layout = Default;

export default About;