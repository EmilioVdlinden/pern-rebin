import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? '/dashboard' : 'http://localhost:5000/dashboard';

export async function getCustomerId() {
  try {

    const response = await axios.get('http://localhost:5000/dashboard', {headers: {token: localStorage.token}});
    return (response.data.customer_id);

  } catch (err) {
    console.log(err);
  }
}