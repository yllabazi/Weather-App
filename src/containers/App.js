import React from "react";
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import TabularData from '../components/Table'
import Footer from '../components/Footer';
import WeatherData from '../components/WeatherData';
import GifyData from '../components/GifyData';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: '',
      weatherDetails: {
        description: 'Sun',
        temp: 0,
        humidity: 0,
        wind: 0,
        icon: ''
      },
      imgSrc: 'https://media.giphy.com/media/QRhtqYeEywJI4/giphy.gif'
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleInputChange(e) {
    this.setState({inputField: e.target.value})
  }

  async handleBtnClick() {
    const weather = await WeatherData(this.state.inputField);
    const imgSrc = await GifyData(weather.current.weather[0].main);
    this.setState(
      {weatherDetails: {
        description: weather.current.weather[0].main,
        temp: weather.current.temp,
        wind: weather.current.wind_speed,
        humidity: weather.current.humidity,
        icon: weather.current.weather[0].icon
        },
        imgSrc: imgSrc
      })
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar 
          handleInputChange={this.handleInputChange}
          handleBtnClick={this.handleBtnClick}
        />
        <TabularData 
          weatherDetails={this.state.weatherDetails} 
          imgSrc={this.state.imgSrc}  
        />
        <Footer />
      </div>
    )
  }
}

