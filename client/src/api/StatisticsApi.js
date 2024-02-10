import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? '/statistics' : 'http://localhost:5000/statistics';

export async function getSensors(customerId) {
  try {
    const response = await axios.get(`http://localhost:5000/statistics/sensors/${customerId}`);
    return (response.data.sensors.count);

  } catch (err) {
    console.log(err);
  }
}

export async function getFullBins(customerId) {
  try {
    const response = await axios.get(`http://localhost:5000/statistics/sensors/${customerId}/full`);
    return (response.data.full.count);

  } catch (err) {
    console.log(err);
  }
}

export async function getTableData(customerId) {
  try {
    const response = await axios.get(`http://localhost:5000/statistics/table/${customerId}`);
    return (response.data);

  } catch (err) {
    console.log(err);
  }
}

export async function getBinDistribution(customerId) {
  try {
    
    const response = await axios.get(`http://localhost:5000/statistics/sensors/${customerId}/distribution`);
    return (response.data);

  } catch (err) {
    console.log(err);
  }
}



