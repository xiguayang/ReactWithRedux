import axios from "axios";

//create an instance of axios client with default properties
export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID k2Ic4nfZ4CNd45Fnn0GcvSQ3WXR3bxa4BN6aKc4KJO4",
    },
});
