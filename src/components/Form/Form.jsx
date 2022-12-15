import { useState } from "react"
import validate from "./validate";
import styled from "styled-components";
import img from "./LOGO.png"


const EstiloImg = styled.img `
    width: 200px;
    position: absolute;
    top: 0.5vw;
`

const EstiloDiv = styled.div `
    background-color: #f0f8ffcd;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 400px;
    width: 500px;
    justify-content: center;
    margin: 6% auto;
`
const EstiloHr = styled.hr `
opacity: 0;
border: none;
`
const EstiloLabel = styled.label `
    font-size: 20px;
    color: #000000;
    padding: 3px;
    border-bottom: 3px solid #ffffff;
`
const EstiloInput = styled.input `
    border: 3px solid black;
    height: 25px;
    border-radius: 5px;
    outline: none;
    transition: .6s;
    &:focus{
    border: 0px;
    border-bottom: 5px solid #000000;
    }
`
const EstiloButton = styled.button `
    border: none;
    width: 100%;
    height: 15%;
    border-bottom: 4px solid #ffffff;
    border-left: 4px solid #ffffff;
    border-radius: 5px;
    transition: .4s;
    &:hover{
    background-color: #ffffff;
    border: 2px solid #000000b5;
    }
`



 const Form = (props) => {

    const [userData,setUserData]= useState({
        username:"",
        password:"",
    });

    const [errors,setErrors]= useState({
        username:"",
        password:"",
    });

    const handleInputChange = (event)=>{
        const {name , value} = event.target;
        setUserData({
            ...userData,
            [name]:value,
        })
        setErrors(
            validate({
                ...userData,
                [name]:value,
            })
        )
    }

    const hadleSubmit = () => {
        props.login(userData);
    }

    return (
    <EstiloDiv>
        <form onSubmit={hadleSubmit}>
          <div>
            <EstiloImg src={img}></EstiloImg>
            <EstiloLabel htmlFor="username">Username: </EstiloLabel>
            <EstiloHr></EstiloHr>
                    <EstiloInput type="text" name="username" value={userData.username} onChange={(event)=> handleInputChange(event)} autoComplete="off"></EstiloInput>
                <p>{errors.username && errors.username}</p>
             </div>
             <div>
            <EstiloLabel htmlFor="password">Password: </EstiloLabel>
            <EstiloHr></EstiloHr>
                    <EstiloInput type="password" name="password" value={userData.password} onChange={ (event) => handleInputChange(event) } autoComplete="off"></EstiloInput>
                <p>{errors.password && errors.password}</p>
        </div>
            <EstiloButton type="Submit">Login</EstiloButton>
        </form>
    </EstiloDiv>
    )

}

export default Form;





// border: 2px;
// background-color: #00fa00b5;
// border-bottom: 4px solid #ffffff;
// border-left: 4px solid #ffffff;
// border-radius: 15px;
// height: 25px;
// outline: none;
// transition: .2s;
// &:focus{
// background-color: #ffffff;
// border-bottom: 4px solid #00fa00b5;
// border-left: 4px solid #00fa00b5;
// }