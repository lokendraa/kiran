import axios from 'axios';


export default axios.create({
    baseURL: 'http://rtrading.thinkzyproducts.com:8006/api/',
    
    headers: { 
      'Content-Type': 'application/json'
    },
  });
  