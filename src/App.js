import './App.css'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import { useState,useEffect } from 'react'
import React from 'react'
import { Route,Routes, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'

 export default function App (props) {
   const [character,setCharacter]= React.useState([])
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const username = 'ejemplo@gmail.com';
   const password = '1password';
   const location= useLocation();


   useEffect(() => {
    !access && navigate('/');
 }, [access]);

   useEffect(() => {
      onSearch(1);
    }, []);

    const onSearch = (character) => {
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
        .then((response) => response.json())
        .then((char) => {
          if (char.name) {
            setCharacter((oldChars) => [...oldChars, char]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    };
   
   const onClose = (character) => {
      setCharacter((characters) =>
        characters.filter((element) => element.id !== character)
      );
    };

   

   function login(userData) {
      if (userData.password === password && userData.username === username) {
         setAccess(true);
         navigate('/home');
      }
   }


  return (
    <div className='App' style={{ padding: '25px' }}>
          {location.pathname !== "/" && <Nav onSearch={onSearch}></Nav>} 
      <Routes>
            <Route path='/' element={<Form login={login}/> } />
              <Route path='/home' element={<Cards character={character} onClose={onClose}/> } />
                <Route path='/About' element={<About/>}/>
                  <Route path='/Detail/:detailId' element={<Detail/>} />
      </Routes>
    </div>
   )
 }


