import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { vehicles } from './Feautures/Counter/vehicleSlice';

function HourlyBase() {
  const vehicleData = useSelector((state) => state.vehicles);
    const dispatch = useDispatch();
    useEffect(() => {
      const fetchDataTaxi = async() => {
            const response = await axios.get("https://nanotaxi-django-1006377417781.asia-south1.run.app/api/list_all_package/");
            dispatch(vehicles(response.data));
        }
        fetchDataTaxi();
    },[]);
    const navigate = useNavigate();
  return (
    <div>
      <header className="App-header">
        <h1>
          Hourly Basis Trip
        </h1>
        <table className='Single'>
          <tr>
            <th>Car Type</th>
            <th>Hours &nbsp;</th>
            <th>KM Included &nbsp;</th>
            <th>Package Amount (₹) &nbsp;</th>
            <th>Extra Hours (₹) &nbsp;</th>
            <th>Extra KM (₹) &nbsp;</th>
            <th>Hours &nbsp;</th>
          </tr>
        {vehicleData && vehicleData.vehicles && vehicleData.vehicles.data && vehicleData.vehicles.data.map(
          (item) => {
              return <tr>
                <td>{item.vehicle_model}</td>
                <td>{item.package_hours}</td>
                <td>{item.package_km}</td>
                <td className='PriceB'>₹ {item.package_price}</td>
                <td>₹ {item.extra_hr_rate}</td>
                <td>₹ {item.extra_km_rate}</td>
                <td>₹ {item.rate_per_hour}</td>
                </tr>
          }
        )}
        </table>
        <br/>
        <button onClick={() => navigate(-1)}>Back to Home</button>
      </header>
    </div>
  );
}

export default HourlyBase;
