import styled from "styled-components";
import img from "./Me.jpg";

const EstiloAbout = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 800px;
  width: 1200px;
  margin: 5% auto;
  background-color: #f0f8fff3;
  border-radius: 2%;
  justify-content: center;
`
const EstiloImg = styled.img`
    width: 500px;
    border-radius: 2%;
    margin: 5px;
`
const EstiloH1 = styled.h1`
  font-size: 35px;
  margin: 0px;
`
const EstiloP = styled.p`
  font-size: 25px;
  margin: 0px;
`


export default function About () {
    return (
    <EstiloAbout>
      <EstiloH1>Leandro kronsteiner</EstiloH1>
      <EstiloP>Full stack developer in progress</EstiloP>
      <hr></hr>
      <a href="https://www.linkedin.com/in/leankrn/" target="_blank">
      <EstiloImg src={img} />
      </a>
      <hr></hr>
      <EstiloP>Esta app fue creada con Html,Css,JavaScript,React y Redux</EstiloP>
      <EstiloP>Este es mi primer proyecto en el curso de full stack developer en Soy henry</EstiloP>
      <EstiloP>Un bootcamp que avarca tecnologias tanto del frontEnd como del backEnd</EstiloP>

        
    </EstiloAbout>
    );
 }