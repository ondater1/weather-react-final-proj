import React, {useState} from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";
import WeatherInfo from "./WeatherInfo";
import './Weather.css';

export default function Weather (props){

const[weatherData, setWeatherData] = useState({ready:false});
const [city,setCity] = useState(props.defaultCity);
function handleResponse (response) {
        console.log(response.data);
        setWeatherData({
            ready:true,
            date:new Date (response.data.dt * 1000),
            temp:response.data.main.temp,
            pressure:response.data.main.pressure,
            wind:response.data.wind.speed,
            humidity:response.data.main.humidity,
            city:response.data.name,
            description:response.data.weather[0].description,
            iconUrl:`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        });
}

function search () {
    const apiKey = "c44c1c027cb5aedabc3d66ae7a76ef48";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

function handleSubmit (event) {
    event.preventDefault();
    search();
}

function handleCityChange (event) {
setCity(event.target.value);
}

if(weatherData.ready) {
    return (
        <div className="Weather">
            <h5>
                <CurrentDate date={weatherData.date}/>
            </h5>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" onChange={handleCityChange}
                        />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-outline-primary w-100"/>
                    </div>
                </div>
            </form>
            <WeatherInfo info={weatherData}/>

        </div>
    )
} else {
    return (
        search(),
            
            <div className="spinner-border" role="status">
            </div>
    );
}

}