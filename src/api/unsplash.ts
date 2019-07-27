import axios from 'axios';
import config from '../utils/config';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: config.UNSPLASH_CLIENT_ID
  }
});
