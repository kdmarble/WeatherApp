import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
    height: 300px;
    width: 200px;
    background: rgba(69,91,204,1);
    margin: 15px 0;
    padding: 15px 0px;
    border-radius: 5px;
    box-shadow: -1px 5px 5px #444;
`

const WeatherIcon = styled.img`
    text-align: center;
    height: 150px;
`

const Temp = styled.h2`
    text-align: center;
    margin: 5px 0;
`


export default class FutureCard extends Component {
    render() {
        return(
            <div>
                <Card>
                    <WeatherIcon src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Antu_weather-showers-day.svg/200px-Antu_weather-showers-day.svg.png'}></WeatherIcon>
                    <Temp>35º</Temp>
                    <Temp>40º / 20º</Temp>
                </Card>
            </div>
        )
    }
} 