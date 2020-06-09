import React from "react";
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import TabularData from '../components/Table'
import WeatherData from '../components/WeatherData';
import WeatherCard from "../elements/Card";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: '',
      weatherDetails: {
        temp: 0,
        precip: '0%',
        wind: '0 KM/H',
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
    console.log(weather.current.weather[0].main);
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar 
          handleInputChange={this.handleInputChange}
          handleBtnClick={this.handleBtnClick}
        />
        <TabularData />
      </div>
    )
  }
}

