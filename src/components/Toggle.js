import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`

const Button = styled.button`
    padding:15px 30px;
    border:2px solid rgb(15,21,183);
    background-color:rgb(15,21,183);
    color:#fafafa;
    font-size: 1rem;
    border-radius: 5px
`

const Search = ({ toggle, today }) => {
    return(
        <Wrapper>
            <Button onClick={toggle}>{today ? `Five Day Forecast` : `Today's Forecast`}</Button>
        </Wrapper>
    );
}

export default Search;
