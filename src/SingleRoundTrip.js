import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { vehicles } from './Feautures/Counter/vehicleSlice';
import axios from 'axios';

function HourlyBase() {
  const taxiData = useSelector((state) => state.vehicles);
    const dispatch = useDispatch();
    useEffect(() => {
      const fetchData = async() => {
            const response = await axios.get("https://nanotaxi-django-1006377417781.asia-south1.run.app/api/list_vehicles/");
            dispatch(vehicles(response.data.vehicles));
        }
        fetchData();
    },[]);
    const navigate = useNavigate();
  return (
    <div>
      <header className="App-header">
        <h1>
          Single/Round Trip
        </h1>
        <table className='Single'>
          <tr>
            <th>Car Type</th>
            <th>Price/Km (₹) &nbsp;</th>
            <th>Passenger Count &nbsp;</th>
          </tr>
        {taxiData && taxiData.vehicles && taxiData.vehicles.map(
          (item) => {
              return <tr>
                <td><b>{item.name}</b></td>
                <td className='Price'>₹{item.rate_per_km}</td>
                <td>{item.capacity} Adults</td>
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