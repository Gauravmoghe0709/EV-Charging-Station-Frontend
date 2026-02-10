import axios from "axios"

const axiosinstance = axios.create({
    baseURL: "https://ev-charging-station-backend-7ufb.onrender.com",
    withCredentials:true
})

export default axiosinstance