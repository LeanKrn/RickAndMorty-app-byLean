import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const EstiloCarta = styled.div `
   border-radius: 2%;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 30px;
   background-color: #ffffff;
   border: 5px;
   border-color: aqua;
   background-repeat: no-repeat;
   background-position: 5px -15px;
   transition: .3s;
   background-size: 92%;
   opacity: 65%;
   &:hover{
   opacity: 100%;
   background-image: url("https://media.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif");
   }
`

const LetrasEstilo = styled.h3 `
   font-size: 25px;
   color: #000;
`
const EstiloImagen = styled.img `
   border-radius: 50%;
   width: 70%;
   padding: 13px;
`
const EstiloHr = styled.hr `
   opacity: 0%;
`

const EstiloBoton = styled.button `
   background-color: #ff00005d;
   color: white;
   border: none;
   width: 100%;
   margin-bottom: 5px;
   border-radius: 5px 5px 0% 0%;
   transition: .3s;
   cursor: pointer;
    &:hover{
      background-color: #ffffff;
      color: #ff3535;
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
   flex-direction: column;
   align-items: center;
   color: #fff;
`

export default function Card(props) {
   return (
      <EstiloCarta>
      <EstiloBoton onClick={() => props.onClose(props.id)}>X</EstiloBoton>
      <StyledLink to={`/detail/${props.id}`}>
            <EstiloImagen src={props.image} alt={props.name} />
            <EstiloHr></EstiloHr>
            <LetrasEstilo>{props.name}</LetrasEstilo>
            <EstiloHr></EstiloHr>
         </StyledLink>
   </EstiloCarta>
   );
}
