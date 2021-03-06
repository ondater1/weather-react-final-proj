import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo (props) {
    return (
        <div className="WeatheInfo">
            <h2>{props.info.city}</h2>
        
            <div className="row mt-3">
                <div className="col-4">
                <ul>
                    <li className="text-capitalize">{props.info.description}</li>
                </ul>
                    <div className="clearfix">
                        <div className="float-left">
                        <WeatherIcon code={props.info.icon} size={64}/>
                        </div>
                        
                            <div className="float-left">
                                <WeatherTemperature celsius={props.info.temp}/>
                                
                            </div>
                    </div>
                </div>
                <div className="col-4">
                    <ul>
                        <li>
                            Wind: {Math.round(props.info.wind)}km/h
                        </li>
                        <li>
                            Humidity: {props.info.humidity}%
                        </li>

                        <li>
                            Pressure: {Math.round((props.info.pressure * 0.75006))}  mHg
                        </li>
                        
                        
                    </ul>
                </div>
                <div className="col-4">
                    <img src="https://media.giphy.com/media/7PK51oAq6EcUnrQYmW/giphy.gif" alt="breathing" className="breathe"/>
                </div>
        
            </div>
        </div>
    );
}