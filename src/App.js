
import './App.css';
import WeatherStrip from './components/WeatherStrip/WeatherStrip';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <WeatherStrip numDays={5}/>
    </div>
  );
}

export default App;
