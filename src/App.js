import './App.css';
import { Routes,Route,useNavigate } from 'react-router-dom';
import Home from './Home';
import HourlyBase from './HourlyBase';
import SingleRoundTrip from './SingleRoundTrip'


function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/hourlybase' element={<HourlyBase/>} />
        <Route path='/singleroundtrip' element={<SingleRoundTrip/>} />
      </Routes>
    </div>
  );
}

export default App;
