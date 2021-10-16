import axios from 'axios';
const serverUrl = process.env.REACT_APP_SERVER_URL;
import history from '@utils/history';
import { logOut } from '@actions/index'
const API = (options) => {

  const instance = axios.create({
    headers: {
      "Authorization" : `Bearer ${localStorage.getItem('token')}`,
    },
    baseURL: `${serverUrl}`,
    ...options
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        localStorage.clear()
        history.push('/login')
        window.location.reload()
      }

      return Promise.reject(error);
    }
  );

  return instance;
}

export default API;
