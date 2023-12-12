import axios from "axios";

let d = JSON.parse(localStorage.getItem("token"));

const authfetch1 = axios.create({

    baseURL : "https://real-pear-fly-kilt.cyclic.app/"
})

authfetch1.interceptors.request.use((request) => {

    request.headers["Authorization"] = "bearer " + d.jwtToken;

    request.headers["Content-Type"] = "application/json";

    return request;
    
},(errow) => {

    return Promise.reject(errow);
})

    authfetch1.interceptors.response.use((response) => {

    return response;
    

},(error) => {

    console.log(error);

    return Promise.reject(error);
})

export default authfetch1;