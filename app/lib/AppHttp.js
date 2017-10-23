import Axios from 'axios';
import {
  APP_URL,
  BASIC_AUTH_UNAME,
  BASIC_AUTH_PASSWORD
} from 'react-native-dotenv';

/**
 * Basic Auth is activated on the server
 */
const http = Axios.create({
 baseURL: APP_URL,
 timeout: 5000,
//  auth: {
//    username: BASIC_AUTH_UNAME,
//    password: BASIC_AUTH_PASSWORD
//  }
});

export default http;
