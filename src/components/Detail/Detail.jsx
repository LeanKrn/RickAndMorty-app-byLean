import { useState,useEffect } from "react";
import { useParams,NavLink } from "react-router-dom";
import styled from "styled-components";

const DivCard = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: azure;
    border-radius: 10px 10px 20px 20px;
    width: 450px;
    margin: 4% auto;
    background-repeat: no-repeat;
    background-position: 30% 77%;

    background-size: 85%;
    background-image: url("https://media.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif");
`
const H1Card = styled.h1 `
    text-align: center;
    width: 70%;
    margin: 2% 10%;
    border-radius: 15px;
    border-bottom: 4.5px solid black;
    transition: .4s;
    &:hover{
        border-bottom: 4.5px solid #4CAF50;
    }
`
const PCard = styled.p `
    font-size: 20px;
    background-color: #4CAF50;
    border-bottom: 4px solid black;
    padding: 5px;
    border-radius: 5px;
`
const ImgCard = styled.img `
    border-radius: 50%;
    margin: 10px;
`
const BotonCard = styled.button `
background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px;
  border-radius: 5px;
  transition: 0.2s;
  cursor: pointer;
`


export default function Detail() {
    const { detailId } = useParams();
    const [character,setCharacter] = useState({})
    
  
    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
         .then((response) => response.json())
         .then((char) => {
            if (char.name) {
               setCharacter(char);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         })
         .catch((err) => {
            window.alert('No hay personajes con ese ID');
         });
      return setCharacter({});
   }, [detailId]);
  
    return (<DivCard>
        <H1Card>{character.name}</H1Card>
        <PCard value="status">Status: {character.status}</PCard>
        <PCard value="genero">Género: {character.gender}</PCard>
        <PCard value="origen">Origen: {character.origin?.name}</PCard>
        <ImgCard src={character.image} alt="img" />
        <NavLink to={"/home"}>
            <BotonCard>Volver</BotonCard>
        </NavLink>
    </DivCard>
    )
  }