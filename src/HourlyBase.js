import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

function HourlyBase() {
    const navigate = useNavigate();
    //const count = useSelector((state) => state.counter.value);
    //const dispatch = useDispatch();
  return (
    <div>
      <header className="App-header">
        <h1>
          Hourly Basis
        </h1>
        <button onClick={() => navigate(-1)}>Back to Home</button>
      </header>
    </div>
  );
}

export default HourlyBase;
