import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 15px;

    > input {
        padding:8px 15px;
        background:rgba(225, 225, 225, 0.9);
        border:0px solid #dbdbdb;
        margin-left: 10px;
        border-radius: 5px;
    }

    > button {
        position:relative;
        padding:6px 15px;
        left:-8px;
        border:2px solid #207cca;
        background-color:#207cca;
        color:#fafafa;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
`

const Search = ({ searchfield, searchChange, onButtonSubmit }) => {
    return(
        <Wrapper>
            <label>Search by ZIP Code:</label>
            <input type="number" id="location-search" name="q"
        aria-label="Search for your location" onChange={searchChange} />
            <button onClick={onButtonSubmit}>Search</button>
        </Wrapper>
    );
}

export default Search;