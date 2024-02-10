import {React, useState, useEffect} from 'react';
import { getCustomerId } from '../../api/DashboardApi';
import Navbar from '../../components/Navbar';
import DropDown from './components/DropDown'
import FullBins from './components/FullBins';
import SensorStatus from './components/SensorStatus';
import CollectionMoment from './components/CollectionMoment';
import Measurements from './components/Measurements';
import BinDistribution from './components/BinDistribution';
import DriverOverview from './components/DriverOverview';


//DIT MOET DE SOFTWARE PAGINA WORDEN MET DAN DE LINKS NAAR ANDERE PAGINAS 

const Dashboard = ({setIsAuthenticated}) => {

  const [customerId, setCustomerId] = useState('');

  /*async function getCustomerId() {
    try {

      const response = await axios.get('http://localhost:5000/dashboard', {headers: {token: localStorage.token}});
      setCustomerId(response.data.customer_id);

    } catch (err) {
      console.log(err);
    }
  }*/

  useEffect(() => {
    getCustomerId().then(
      (response) => {
        setCustomerId(response);
    });
  }, []);

  return (
    <div className='flex bg-rebin-light-blue'>
      <Navbar setIsAuthenticated={setIsAuthenticated}></Navbar>
      <div className='p-12 w-screen'>
        <h1 className='text-4xl font-medium text-rebin-darkblue'>Dashboard</h1>
        <div className='grid grid-cols-4 gap-x-5 gap-y-5 mt-8	' style={{ gridAutoRows: "minmax(80px, auto)" }}>
          <DropDown></DropDown>
          <FullBins customerId={customerId}></FullBins>
          <SensorStatus customerId={customerId}></SensorStatus>
          <CollectionMoment></CollectionMoment>
          <Measurements customerId={customerId}></Measurements>
          <BinDistribution customerId={customerId}></BinDistribution>
          <DriverOverview></DriverOverview>
        </div>
      </div>
    </div>
  ) 
}

export default Dashboard;