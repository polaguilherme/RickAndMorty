import React from "react";
import styles from "./Search.module.css";

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Procurar personagens"
        type="text"
        className={styles.input}
      />
      <button
        onClick={(e) => {
          setPageNumber(1);
          e.preventDefault();
        }}
        className={`${styles.btn} btn btn-primary fs-5`}
      >
        Buscar
      </button>
    </form>
  );
};

export default Search;
