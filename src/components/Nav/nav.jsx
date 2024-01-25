import SearchBar from "../SearchBar";
import styles from "./nav.module.css";
import {Link,} from "react-router-dom";
let {container, link } = styles;


export default function Nav({onSearch}) { 
  return <div  className={container}>
         
    <Link className={link} to="/about">About</Link>
    <Link className={link} to="/home">Home</Link>
    <Link className={link} to="/favorites">Favorites</Link>
    <SearchBar onSearch={onSearch} />
 </div>;
}