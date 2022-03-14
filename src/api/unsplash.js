import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization : 'Client-ID ZJgvDSLlQYS45h_Q4lyxlxsHAlYHpYMUTTYJoy9uVqU'
      }
})