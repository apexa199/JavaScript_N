import axios from "axios";

let d = JSON.parse(localStorage.getItem("token"));

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `bearer ${d?.jwtToken}`;