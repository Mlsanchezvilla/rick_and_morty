//import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/index.jsx';
import characters from './data.js';
//import SearchBar from './components/SearchBar/index.jsx';
import Nav from './components/Nav/nav.jsx';


function App() {


   //  const [characters, setcharacters] = useState([]);
   //  function onSearch
   return (
      <div className='App'>
          <Nav/> 
          <Cards characters={characters}
         // onClose={() => window.alert("Emulamos que se cierra la card")}
        /> 
         </div>
   );
}

export default App;
