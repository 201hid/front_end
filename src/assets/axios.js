import axios from "axios"

axios.defaults.baseURL = 'http://localhost:8080/';

axios.default.headers.common['Authorization']= 'Bearer' + localStorage.getItem('token');