import './App.css'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail'
import Form from './components/Form'
import Favorite from './components/Favorite'

// const URL_BASE = "https://be-a-rym.up.railway.app/api/character"
// const API_KEY = "37756baaea17.b99eadd4967c86289108"
// const email = "aguirreernesto25@gmail.com"
// const password = "Ernest201"

const URL = 'http://localhost:3001/rickandmorty/login'

function App() {
   const location = useLocation()
   const navigate = useNavigate()
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)

   // const login = (userData) => {
   //    if (userData.email === email && userData.password === password){
   //       setAccess(true);
   //       navigate("/home")
   //    }
   // }

   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;

         setAccess(access);
         access && navigate('/home');

      } catch (error) {
         console.log(error.message);
      }
   }

   const logOut = () => (
      setAccess(false)
   )

   useEffect(() => {
      !access && navigate("/")
   }, [access, navigate])

   const onSearch = async (id) => {
      try {
         const { data } =await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
   }

   const onClose = (id) => {
      const characterFiltered = characters.filter(character =>
      character.id !== id)
      setCharacters(characterFiltered)
   }

   return (
      <div className='App'>
         {
            location.pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut}/>
         }
         <Routes>
            <Route path='/' element={<Form login={login}/>} ></Route>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/detail/:id" element={<Detail/>}></Route>
            <Route path="/favorites" element={<Favorite/>} onClose={onClose}></Route>
         </Routes>
      </div>
   )
}

export default App
