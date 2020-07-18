export default {
    colors: {
        primary: "rgba(115, 188, 205, 1)",
        secondary: "#F706CF"
    },
    navigation: {
        items: [
            {
                path: "/",
                text: "Home"
            }, 
            {
                path: "/portfolio",
                text: "Portfolio"
            }, 
            {
                path: "/about",
                text: "About"
            },
            {
                path: "/contact",
                text: "Contact"
            }
        ]
    },
    pages: {
        home: {

        },
        about: {
            companies: [
                {
                    name: "Rescue Agency",
                    image: "images/rescue-agency-logo.svg"
                },
                {
                    name: "Sunsick Studio",
                    image: "images/sunsick-studio-logo.png"
                }
            ]
        }
    }
}