import SearchBar from "../Searchbar/SearchBar";
import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const DivBar = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 25px;
    margin: -30px;
    justify-content: end;
    font-size: 18px;
    background-color: #399f6acd;
`
const ImgBar = styled.img`
    width: 200px;
    left: 3%;
    top: -2%;
    position: absolute;
`
const H3Bar = styled.h3`
   display: contents;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    height: 30px;
    margin: 5px 60px;
    color: black;
    text-decoration: none;
    background-color: white;
    border-radius: 5px;
    padding: 6px;
    font-size: 17px;
    transition: .5s;
    &:hover {
        background-color: #00ff7b94;
        color: white;
    }
`

export default function Nav (props) {
    return (
    <DivBar>
        <Link to="/home">
        <ImgBar src="https://logosmarcas.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" />
          
        </Link>
        <StyledLink to="/about">
          <H3Bar>About me</H3Bar>  
        </StyledLink>
        <SearchBar onSearch={props.onSearch}/>
    </DivBar>
    );
 }



 export {DivBar}















