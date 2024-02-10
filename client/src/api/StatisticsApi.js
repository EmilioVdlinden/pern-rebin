import axios from 'axios';
import { baseURL } from '../config';

export async function getSensors(customerId) {
  try {
    const response = await axios.get(`${baseURL}statistics/sensors/${customerId}`);
    return (response.data.sensors.count);

  } catch (err) {
    console.log(err);
  }
}

export async function getFullBins(customerId) {
  try {
    const response = await axios.get(`${baseURL}statistics/sensors/${customerId}/full`);
    return (response.data.full.count);

  } catch (err) {
    console.log(err);
  }
}

export async function getTableData(customerId) {
  try {
    const response = await axios.get(`${baseURL}statistics/table/${customerId}`);
    return (response.data);

  } catch (err) {
    console.log(err);
  }
}

export async function getBinDistribution(customerId) {
  try {
    
    const response = await axios.get(`${baseURL}statistics/sensors/${customerId}/distribution`);
    return (response.data);

  } catch (err) {
    console.log(err);
  }
}



