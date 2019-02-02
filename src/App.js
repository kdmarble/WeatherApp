import React, { Component } from 'react';
import TodayCard from './components/TodayCard';
import CardContainer from './components/CardContainer';
import Search from './components/Search';
import styled from 'styled-components';

const Container = styled.div`
  background: rgb(15,21,183);
  background: linear-gradient(0deg, rgba(15,21,183,1) 11%, rgba(119,157,223,1) 100%);
  height: 100vh;
  padding: 100px 15px;
`

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      lat: null,
      long: null,
      searchfield: "",
      isLoading: true,
      currentWeather: {
        icon: 'Shades',
        conditions: "",
        temp: null,
        feelslike: null,
        hi: null,
        low: null,
      }
    }
  }

  requests = async () => {
    const LATLONG = '//api.openweathermap.org/data/2.5/weather?zip=';
    const ZIP = this.state.searchfield;
    const API_KEY_ONE = process.env.REACT_APP_API_KEY_ONE;
    await fetch(`${LATLONG}${ZIP}&units=imperial&APPID=${API_KEY_ONE}`)
      .then(response => response.json())
      .then(data => this.setState({lat: data.coord.lat, long: data.coord.lon, city: data.name}));
    const WeatherData = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/';
    const API_KEY_TWO = process.env.REACT_APP_API_KEY_TWO;
    const LAT = this.state.lat;
    const LONG = this.state.long;
    await fetch(`${WeatherData}${API_KEY_TWO}/${LAT},${LONG}`)
      .then(response => response.json())
      .then(data => this.setState({ 
        currentWeather: {
          ...this.state.currentWeather, 
          icon: data.currently.icon, 
          conditions: data.currently.conditions, 
          temp: data.currently.temperature, 
          feelslike: data.currently.apparentTemperature, 
          hi: data.daily.data[0].temperatureHigh, 
          low: data.daily.data[0].temperatureLow},
        isLoading: false}));
  }

  onButtonSubmit = () => {
    this.requests();
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    return (
      <Container>
        <Search searchChange={this.onSearchChange} onButtonSubmit={this.onButtonSubmit}/>
        <TodayCard 
          city={this.state.city} 
          icon={this.state.currentWeather.icon} 
          conditions={this.state.currentWeather.conditions} 
          temp={this.state.currentWeather.temp} 
          feelslike={this.state.currentWeather.feelslike} 
          hi={this.state.currentWeather.hi} 
          low={this.state.currentWeather.low}
          isLoading={this.state.isLoading} />
      </Container>
    );
  }
}

export default App;

