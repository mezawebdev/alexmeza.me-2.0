export default {
    getUniqueString(length) {
        let result = "",
            characters = "abcdefghijklmnopqrstuvwxyz",
            charactersLength = characters.length;

        for (let i = 0; i < length; i++) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }
}