import React from 'react';

import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   const {onSearch} = props;

   return (
      <div className={styles.SearchBar}>
         <input  type = "search" />
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
}
