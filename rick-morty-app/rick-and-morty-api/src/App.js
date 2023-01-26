import React, { useState, useEffect } from "react";
import "./App.css";
import { SearchBar } from "./components/search-card";

function App() {
  const [dataAll, setDataAll] = useState([]);

  const url = "https://rickandmortyapi.com/api/character/?page=";
  const handleFetchData = async () => {
    let result = [];
    const response = await fetch(url);
    const data = await response.json();
    const MAX_PAGE = data.info.pages;

    for (let index = 1; index <= MAX_PAGE; index++) {
      const response = await fetch(url + index);
      const data = await response.json();

      for (const iterator of data.results) {
        result.push(iterator);
      }
    }

    setDataAll(result);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <div className="App">
      <SearchBar data={dataAll} />

      <p></p>
    </div>
  );
}

export default App;
