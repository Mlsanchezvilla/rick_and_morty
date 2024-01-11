import SearchBar from "../SearchBar";

 function Nav() {
    return (
       
<div>
<SearchBar onSearch={(characterID) => window.alert(characterID)} />

         
 </div>

    )
}

export default Nav;