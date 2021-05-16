import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay (props){

let maxTemperature = Math.round(props.data.temp.max);
let minTemperature = Math.round(props.data.temp.min);

function day () {
    let date = new Date(props.data.dt*1000);
    let day = date.getDay();
    let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

    return days[day];
}

    return (
        <div className = "WeatherForecastDay">
            <div className="WeatherForecast-day">
                {day()}
            </div>
                <WeatherIcon code={props.data.weather[0].icon} size={36}/>
            <div className="WeatherForcast-temperature">
                <span className="WeatherForcast-temperature-max">°{maxTemperature}</span> 
                | 
                <span className="WeatherForcast-temperature-min">°{minTemperature}</span>
            </div>
        </div>
    )

}