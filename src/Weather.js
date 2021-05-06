import React from 'react';
import './Weather.css';

export default function Weather (){
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on"/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100"/>
                    </div>
                </div>
            </form>
    <h2>Lisbon</h2>
    
    <div className="row">
        <div className="col-4">
        <ul>
            <li>Mostly Cloudy</li>
         </ul>
            <div className="clearfix mt-3">
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="Partly Cloudy" className="float-left weather-icon"/>
                    <div className="float-left">
                        <span className="temperature">12</span><span className="units">°C|F</span>
                    </div>
            </div>
        </div>
        <div className="col-4">
            <ul>
                <li>
                    Precipitation: 15%
                </li>
                <li>
                    Humidity: 72%
                </li>
                <li>
                    Wind: 13km/h
                </li>
            </ul>
        </div>
        <div className="col-4">
            <img src="https://media.giphy.com/media/7PK51oAq6EcUnrQYmW/giphy.gif" alt="breathing" className="breathe"/>
        </div>
        
    </div>
</div>
    )
}