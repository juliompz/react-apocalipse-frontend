import axios from "axios";

const blogfetch = axios.create({
    baseURL:'http://localhost:8000'
})

export default blogfetch