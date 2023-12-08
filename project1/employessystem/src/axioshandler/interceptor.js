import axios from "axios";
import { toast } from 'react-toastify';

const authfetch = axios.create({
  
    baseURL : "https://real-pear-fly-kilt.cyclic.app"
})

authfetch.interceptors.request.use((requ) => {

    requ.headers["Content-Type"] = "application/json"

    return requ;

},(error) => {

    return Promise.reject(error)
})

authfetch.interceptors.response.use((response) => {

    if(response.status == 200){

        toast.success(`${response.data.message}`, {
            position: "top-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            });  
    }
   
    return response;

},(error) => {

    if(error.response.status == 400)
    {
        toast.error(`${error.response.data.message}`, {
          position: "top-center",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          });  
        }
        
    return Promise.reject(error)
})

export default authfetch;