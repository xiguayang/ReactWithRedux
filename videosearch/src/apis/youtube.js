import axios from "axios";
const KEY = "AIzaSyCB-MOpGm4hTYOtV2yq_5aVSJEDtwguDKQ";
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
    },
});
