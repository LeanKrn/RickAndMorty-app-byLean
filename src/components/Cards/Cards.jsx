import Card from "../Card/Card";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Detail from "../Detail/Detail";
const EstiloCartas = styled.div `
   display: flex;
   justify-content: center;
   margin: 2%;
   flex-wrap: wrap;
`

export default function Cards(props) {
   const { character } = props;
   return (
   <EstiloCartas>
      {character.map((componet , index) => {
         return(
            
            <Card
            name={componet.name}
            gender={componet.gender}
            image={componet.image}
            id={componet.id}
            key={index}
            onClose={props.onClose}
            />
            
         )
      })}
   </EstiloCartas>);
}
