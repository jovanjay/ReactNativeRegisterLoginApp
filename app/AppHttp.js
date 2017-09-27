import Axios from 'axios';

const http = Axios.create({
 baseURL: APP_URL,
 timeout: 5000,
 auth: {
   username: BASIC_AUTH_UNAME,
   password: BASIC_AUTH_PASSWORD
 }
});

export default http;
