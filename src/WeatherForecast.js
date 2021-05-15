import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastStyles.css";
import axios from "axios";

export default function WeatherForecast (props) {
    function handleResponse (response) {

    }
    
    let apiKey = "c44c1c027cb5aedabc3d66ae7a76ef48";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">
                    Thu
                    </div>
                    <WeatherIcon code="01d" size={36}/>
                    <div className="WeatherForcast-temperature">
                        <span className="WeatherForcast-temperature-max">°19</span> | <span className="WeatherForcast-temperature-min">°10</span>
                    </div>
                </div>
            </div>
        </div>
    );
}