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
  const [access, setAccess] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  //simulando base de datos para la parte de seguridad

  const EMAIL = "monika@gmail.com";
  const PASSWORD = "Lupita12345";

  useEffect(() => {
    console.log("Cambio el access");
    !access && navigate("/");
  }, [access]);

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  //se guardan por referencia
  async function onSearch(id) {
    //llamada a API

    try {
      const response = await axios(
        `https://rickandmortyapi.com/api/character/${id}`
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
      <div className="contentNav">
        {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : undefined}
      </div>
      <div className="contentTotal">
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
    </div>
  );
}

export default App;
