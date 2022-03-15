import React from "react";
import styles from "./Search.module.scss";
const Search = ({ setSearch }) => {
  return (
    <form className='d-flex justify-content-center gap-4 mb-5'>
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder='Buscar..'
        type='text'
        className={styles.input}
      />
      <button className='btn btn-lg fw-bold btn-primary'>Buscar</button>
    </form>
  );
};

export default Search;
