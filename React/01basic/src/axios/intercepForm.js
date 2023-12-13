import axios from "axios";
import { toast } from 'react-toastify';
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
        toast.success('${Sucessfull}', {
            position: "top-right",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "light",
            });
    }

    return response;
    

},(error) => {
    if(error.response.status == 500){
        toast.error('${Error}', {
            position: "top-right",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "light",
            });
    }

    console.log(error);

    return Promise.reject(error);
})

export default authfetch;
