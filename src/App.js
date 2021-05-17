import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="Container">
      <h1>Calm Weather</h1>
      <Weather defaultCity="Prague"/>
      <footer>
      The project was coded by <a href = "https://www.linkedin.com/in/alla-strakhova-aa01a98a/" target = "_blank" rel="noreferrer">Alla Strakhova</a>
      , it is <a href = "https://github.com/ondater1/weather-react-final-proj" target = "_blank" rel="noreferrer">open-sourced on Github </a>
       and <a href = "https://determined-meninsky-ef0708.netlify.app/" target = "_blank" rel="noreferrer">hosted on Netlify</a>. Enjoy!
      </footer>
    </div>
    </div>
  );
}

