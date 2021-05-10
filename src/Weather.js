import React, {useState} from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";
import './Weather.css';

export default function Weather (props){

    const[weatherData, setWeatherData] = useState({ready:false});
function handleResponse (response) {
console.log(response.data);
setWeatherData({
    ready:true,
    date:new Date (response.data.dt * 1000),
    temp:response.data.main.temp,
    wind:response.data.wind.speed,
    humidity:response.data.main.humidity,
    city:response.data.name,
    description:response.data.weather[0].description,
    iconUrl:"https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
});

}
if(weatherData.ready) {
    
    return (
        <div className="Weather">
            <p>
                <CurrentDate date={weatherData.date}/>
            </p>
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on"/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-outline-primary w-100"/>
                    </div>
                </div>
            </form>
    <h2>{weatherData.city}</h2>
    
    <div className="row">
        <div className="col-4">
        <ul>
            <li className="text-capitalize">{weatherData.description}</li>
         </ul>
            <div className="clearfix mt-3">
                <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left weather-icon"/>
                    <div className="float-left">
                        <span className="temperature">{Math.round(weatherData.temp)}</span><span className="units">°C|F</span>
                    </div>
            </div>
        </div>
        <div className="col-4">
            <ul>
                <li>
                    Precipitation: :( %
                </li>
                <li>
                    Humidity: {weatherData.humidity}%
                </li>
                <li>
                    Wind: {Math.round(weatherData.wind)}km/h
                </li>
            </ul>
        </div>
        <div className="col-4">
            <img src="https://media.giphy.com/media/7PK51oAq6EcUnrQYmW/giphy.gif" alt="breathing" className="breathe"/>
        </div>
        
    </div>
</div>
    )
} else {
    const apiKey = "c44c1c027cb5aedabc3d66ae7a76ef48";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="spinner-border" role="status">
        </div>
    );
}

}