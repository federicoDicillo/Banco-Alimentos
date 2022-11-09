import axios from 'axios';

export default axios.create({
  baseURL: 'heroku',
  headers: { 'Content-Type': 'application/json' },
});
