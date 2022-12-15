import { useState } from 'react';
import styled from 'styled-components';
import React from 'react';

const DivSearch = styled.div`
   
`
const Inputs = styled.input`
  width: 25vh;
  height: 43px;
  margin: 8px 0;
  box-sizing: border-box;
  border-style: none;
  border-radius: 2px;
`
const Buttonsdos = styled.button`
text-align: left;
height: 43px;
margin: 2px 10px;
border-style: none;
background-color: #00ff7b94;
color: white;
border-radius: 2px;
transition: .3s;
&:hover{
   background-color: white;
   color:#00ff7b94;
   cursor: pointer;
}
`

export default function SearchBar(props) {
   let [characterId, setId] = useState([])


   return (
      <DivSearch>
         <Inputs 
         autoComplete='off'
         type="search"
         name="search"
         id="#"
         onChange={(event) => setId((characterId = event.target.value))}
         />
         <Buttonsdos onClick={() => props.onSearch(characterId)}>Agregar</Buttonsdos>
      </DivSearch>
   );
}
export{DivSearch, Inputs, Buttonsdos}