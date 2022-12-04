import axios from 'axios';

const proximityApi = axios.create({
  baseURL: `${ import.meta.env.VITE_API_URI }/proximity`
});

export default proximityApi;
