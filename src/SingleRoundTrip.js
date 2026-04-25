import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { vehicles } from './Feautures/Counter/vehicleSlice';
import axios from 'axios';

function HourlyBase() {
  const taxiData = useSelector((state) => state.vehicles);
    const dispatch = useDispatch();
    useEffect(() => {
      const fetchData = async() => {
            const response = await axios.get("https://nanotaxi-django-1006377417781.asia-south1.run.app/api/list_vehicles/");
            console.log(response.data);
            dispatch(vehicles(response.data.vehicles));
        }
        fetchData();
    },[]);
    console.log("Taxi Vehicle",taxiData.vehicles);
    const navigate = useNavigate();
  return (
    <div>
      <header className="App-header">
        <h1>
          Single/Round Trip
        </h1>
        <button onClick={() => navigate(-1)}>Back to Home</button>
      </header>
      {taxiData && taxiData.vehicles && taxiData.vehicles.map(
        (item) => {
            return <p>{item.name}</p>
        }
      )}
    </div>
  );
}

export default HourlyBase;
