import axios from 'axios';
import { baseURL } from '../config';

export async function getCustomerId() {
  try {

    const response = await axios.get(`${baseURL}dashboard`, {headers: {token: localStorage.token}});
    return (response.data.customer_id);

  } catch (err) {
    console.log(err);
  }
}