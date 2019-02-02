import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 15px;

    div > input {
        padding:8px 15px;
        background:rgba(225, 225, 225, 0.9);
        border:0px solid #dbdbdb;
        margin-left: 10px;
        font-size: 1rem;
        width: 50%;
    }

    div > button {
        padding:6px 15px;
        border:2px solid rgb(15,21,183);
        background-color:rgb(15,21,183);
        color:#fafafa;
        font-size: 1rem;
    }
`


const Search = ({ searchfield, searchChange, onButtonSubmit }) => {
    return(
        <Wrapper>
            <label>Search by ZIP Code:</label>
            <div>
                <input type="number" id="location-search" name="q"
            aria-label="Search for your location" onChange={searchChange} />
                <button onClick={onButtonSubmit}>Search</button>
            </div>
        </Wrapper>
    );
}

export default Search;