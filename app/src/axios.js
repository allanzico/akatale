import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-akatale-2692f.cloudfunctions.net/api' //API main URL
    // baseURL: 'http://localhost:5001/akatale-2692f/us-central1/api' //API main URL
});

export default instance;