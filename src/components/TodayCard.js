import React from 'react';
import styled from 'styled-components';


const Card = styled.div`
    height: 300px;
    width: 200px;
    background: hsl(200, 40%, 75%, 0.4);
    padding: 15px 0px;
    border-radius: 5px;
    box-shadow: 0px 5px 60px -12px rgba(38,55,122,1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`

const WeatherIcon = styled.img`
    text-align: center;
    height: 150px;
`

const Temp = styled.h2`
    text-align: center;
    margin: 5px 0;
    font-weight: normal;
`

const Header = styled.h1`
    text-align: center;
    width: 50%;
    font-weight: 400;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
    margin-top: 50px;
`

const TodayCard = ({ city, icon, conditions, temp, feelslike, hi, low, isLoading, summary, todaySummary }) => {
    if (isLoading) {
        return(
        <Wrapper>
            <Header>Current Weather for {city === '' ? '...' : city}</Header>
            <Card>
                <WeatherIcon src={require(`../img/SVG/${icon}.svg`)}></WeatherIcon>
                <Temp>Waiting for location...</Temp>
            </Card>
        </Wrapper>
        )} else {
            return(
        <Wrapper>
            <Header>Current Weather for {city === '' ? '...' : city}</Header>
            <Header>{summary}</Header>
            <Card>
                <WeatherIcon src={require(`../img/SVG/${icon}.svg`)}></WeatherIcon>
                <Temp>{todaySummary}</Temp>
                <Temp>{conditions}</Temp>
                <Temp>{Math.round(temp)}º</Temp>
                <Temp>Feels like {Math.round(feelslike)}º</Temp>
                <Temp>Hi: {Math.round(hi)}º Low: {Math.round(low)}º</Temp>
            </Card>
        </Wrapper>
            )
        }
}


export default TodayCard;