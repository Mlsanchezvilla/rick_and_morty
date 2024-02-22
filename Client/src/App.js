import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/index.jsx";
import Nav from "./components/Nav/nav.jsx";
import axios from "axios";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Form from "./components/Form";
import Favorites from "./components/favorites/favorites.jsx";

function App() {
  //creando un estado local
  const [characters, setCharacters] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const response = await axios(
        URL + `?email=${email}&password=${password}`
      );
      if (response.data.access) {
        navigate("/home");
      }
    } catch (error) {
      window.alert("Error logueado");
    }
  }

  //se guardan por referencia
  async function onSearch(id) {
    //llamada a API

    try {
      const response = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (response.data.name) {
        setCharacters((oldChars) => [...oldChars, response.data]);
      }
    } catch (error) {
      window.alert("Error logueado");
    }
  }

  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== id);
    setCharacters(filtered);
  };

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : undefined}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/Home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/About" element={<About />} />

        <Route path="/detail/:detailId" element={<Detail />} />

        <Route path="/Favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
