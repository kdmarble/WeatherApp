import React, { Component } from 'react';
import styled from 'styled-components';
import FutureCard from './FutureCard';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const Header = styled.h1`
    text-align: center;
`

export default class CardContainer extends Component {
    render() {
        return(
        <div>
            <Header>5 Day Forecast</Header>
            <Wrapper>
                <FutureCard />
                <FutureCard />
                <FutureCard />
                <FutureCard />
                <FutureCard />
            </Wrapper>
        </div>
        );
    }
}