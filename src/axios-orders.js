import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-188f3.firebaseio.com/'
});

export default instance;
