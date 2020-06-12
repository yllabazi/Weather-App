import React from "react";
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import TabularData from '../components/Table'
import WeatherData from '../components/WeatherData';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: '',
      weatherDetails: {
        description: '',
        temp: 0,
        humidity: 0,
        wind: 0,
        icon: ''
      }
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleInputChange(e) {
    this.setState({inputField: e.target.value})
  }

  async handleBtnClick() {
    const weather = await WeatherData(this.state.inputField);
    this.setState(
      {weatherDetails: {
        description: weather.current.weather[0].main,
        temp: weather.current.temp,
        wind: weather.current.wind_speed,
        humidity: weather.current.humidity,
        icon: weather.current.weather[0].icon
        }
      })
    console.log(weather.current.weather[0].main, weather.current.temp );
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar 
          handleInputChange={this.handleInputChange}
          handleBtnClick={this.handleBtnClick}
        />
        <TabularData weatherDetails={this.state.weatherDetails} />
      </div>
    )
  }
}

