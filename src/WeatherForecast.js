import React, {useState} from "react";

import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecastStyles.css";
import axios from "axios";

export default function WeatherForecast (props) {

    let [loaded, setLoaded] = useState(false);
let [forecast,setforecast] = useState(null);

    function handleResponse (response) {
console.log(response.data);
setforecast(response.data.daily);
setLoaded(true);
    }
    
    

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <WeatherForecastDay data = {forecast[0]}/>
                    </div>
                </div>
            </div>
        );
    } else {
        let apiKey = "c44c1c027cb5aedabc3d66ae7a76ef48";
        let lon = props.coordinates.lon;
        let lat = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return null;
    }

    
}