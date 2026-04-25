import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { vehicles } from './Feautures/Counter/vehicleSlice';

function Home() {
  const navigate = useNavigate();
  //const vehicleData = useSelector((state) => state.counter.value);
  //const dispatch = useDispatch();

  return (
    <div>
        <header className='App-header'>
            <h1>Home</h1>
            <button onClick={() => navigate("/hourlybase")}>Hourly Basis</button>
            <button onClick={() => navigate("/singleroundtrip")}>Single/Round Trip</button>
        </header>
    </div>
  );
}

export default Home;