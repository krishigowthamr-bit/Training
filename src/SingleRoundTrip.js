import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { vehicles } from './Feautures/Counter/vehicleSlice';
import axios from 'axios';

function HourlyBase() {
    const fetchData = async() => {
        const response = await axios.get("https://nanotaxi-django-1006377417781.asia-south1.run.app/api/list_vehicles/");
        console.log(response.data);
        return response.data.vehicles;
    }
    const dispatch = useDispatch();
    const taxies = useSelector((state) => state.vehicles)
    useEffect(() => {
        const response = fetchData();
        dispatch(vehicles(response));
        console.log("Vehicle Response",taxies);
    },[])
    const navigate = useNavigate();
  return (
    <div>
      <header className="App-header">
        <h1>
          Single/Round Trip
        </h1>
        <p>{taxies}</p>
        <button onClick={() => navigate(-1)}>Back to Home</button>
      </header>
    </div>
  );
}

export default HourlyBase;
