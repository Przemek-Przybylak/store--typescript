import axios from "axios";

const apiConnect = axios.create({
    baseURL: "https://fakestoreapi.com/"
});

export default apiConnect;