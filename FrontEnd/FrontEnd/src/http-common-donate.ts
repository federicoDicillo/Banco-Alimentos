import axios from 'axios';

export default axios.create({
  baseURL: 'heroku',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  method: 'POST',
});
