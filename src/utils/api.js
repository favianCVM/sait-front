import axios from 'axios';
import { useHistory } from 'react-router-dom';

const serverUrl = process.env.REACT_APP_SERVER_URL;

const API = (options) => {
  const history = useHistory()
  const instance = axios.create({
    headers: {
      "Authorization" : `Bearer ${localStorage.getItem('token')}`,
    },
    baseURL: `${serverUrl}/api/`,
    ...options
  });

  instance.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 401 || error.response.status === 403) {
        localStorage.clear();
        history.push('/login');
      }

      return Promise.reject(error);
    }
  );

  return instance;
}

export default API;
