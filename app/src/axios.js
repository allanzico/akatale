import axios from "axios";

const instance = axios.create({
    baseURL: '...' //API main URL
});

export default instance;