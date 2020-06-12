import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThermometerHalf, faWind, faTint, faCloudSun, faCloudRain} from '@fortawesome/free-solid-svg-icons';


class WeatherCard extends React.Component {
  render() {
    let today = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let day = days[today.getDay()]
    let yyyy = today.getFullYear();

    today = day + ' - ' + dd + '/' + mm + '/' + yyyy;
    const data = this.props.weatherDetails;
    return (
      <div>
        <p className={this.props.className}> {today} </p>
        <p className={this.props.className}><i className="wi wi-cloudy" /> {data.description}</p>
        <p className={this.props.className}><i className="wi wi-thermometer" /> {data.temp} °C</p>
        <p className={this.props.className}><i className="wi wi-windy"/> {data.wind} km/h</p>
        <p className={this.props.className}><i className="wi wi-humidity" /> {data.humidity}%</p>
      </div>

    )
  }
}

export default WeatherCard;