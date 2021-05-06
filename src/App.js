import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="Container">
      <h1>Calm Weather</h1>
      <p>Wednesday, May 5, 21:56</p>
      <Weather/>
      <footer>
      <a href = "https://github.com/ondater1/weather-react-final-proj" target = "_blank" rel="noreferrer">Open source</a> coded by <a href = "https://www.linkedin.com/in/alla-strakhova-aa01a98a/" target = "_blank" rel="noreferrer">Alla Strakhova</a>
      </footer>
    </div>
    </div>
  );
}

