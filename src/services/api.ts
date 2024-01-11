import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-rocketmovies-by2s.onrender.com"
});
