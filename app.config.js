export default {
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
                    image: "images/profile-1.jpg"
                },
                {
                    name: "Sunsick Studio",
                    image: "images/profile-1.jpg"
                }
            ]
        }
    }
}