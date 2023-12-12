import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let d = JSON.parse(localStorage.getItem("token"));

const authfetch = axios.create({

    baseURL : "https://real-pear-fly-kilt.cyclic.app/"
})

authfetch.interceptors.request.use((request) => {

    request.headers["Authorization"] = "bearer " + d.jwtToken;

    request.headers["Content-Type"] = "application/json";

    return request;
    
},(errow) => {

    return Promise.reject(errow);
})

    authfetch.interceptors.response.use((response) => {

    if(response.status == 200){
        
    }

    return response;
    

},(error) => {

    console.log(error);

    return Promise.reject(error);
})

export default authfetch;
