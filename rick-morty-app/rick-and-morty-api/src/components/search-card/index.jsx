import React, { useState, useEffect } from "react";
import "./style.search-card.css";

function SearchBar({ data }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(0);

  //shuffling array
  let filteredNames = data.sort(() => 0.5 - Math.random());

  const boquita = (dat) => {
    return dat.name.toLowerCase().includes(query.toLowerCase());
  }

  if (query !== "") {
    filteredNames = data.filter(boquita)
  }

  const handleOnChange = (event) => {
    setQuery(event.target.value);
  };


  useEffect(() => {

    setResults(document.getElementById("container").childElementCount)

  }, [filteredNames]);

  function anim(index) {
    return { animation: `fade-in ${2}s ease-in ${1}s both` }
  }


  return (
    <div className="SearchBar" >
      <div>
        <p>Results: {results}</p>
        <input
          type="text"
          name="input"
          id="input"
          onChange={handleOnChange}
          placeholder="Search..."
        />

      </div>
      <div className="container" id="container">
        {filteredNames.map((dat, index) => (
          <div
            key={dat.id}
            className="card"
            style={anim(index)}
          >

            <div className="container-image">
              <img src={dat.image} alt="" />
            </div>

            <div className="container-data">
              <h4>{dat.name}</h4>
              <p>Gender: {dat.gender}</p>
              <p>Status: {dat.status}</p>
              <p>Origin: {dat.origin.name}</p>
              <p>Species: {dat.species}</p>
              <p>Type: {dat.type === "" ? "Not found" : dat.type}</p>
              <p>
                {dat.episode.length > 1 ? "Appearances: " : "Appearance: "}
                {dat.episode.length}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { SearchBar };
