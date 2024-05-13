import React, { useState } from "react";
import "../styles/FighterPage.css";
import fighterStat from "../services/fighterStat";
import { Link } from "react-router-dom";

function FightersCards() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredFighters = fighterStat
    .filter((fighter) =>
      fighter.name.toLowerCase().includes(searchInput.toLowerCase())
    )
    .filter((fighter) =>
      selectedCategory ? fighter.weightclass === selectedCategory : true
    );
  const uniqueWeightClasses = [
    ...new Set(fighterStat.map((fighter) => fighter.weightclass)),
  ];

  return (
    <>
      <h1 className="statTitle">All Fighters</h1>
      <div className="search-container">
        <input
          className="Search"
          type="text"
          placeholder="&#128269; Search fighters"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <select
          className="Selector"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All categories</option>
          {uniqueWeightClasses.map((weightClass) => (
            <option key={weightClass} value={weightClass}>
              {weightClass}
            </option>
          ))}
        </select>
      </div>
      <div className="article-container">
        {filteredFighters.map((fighter) => (
          <Link
            key={fighter.id}
            to={`/fighters/${fighter.name}`}
            state={{fighter : fighter}}
            className="fighterLink"
          >
            <article key={fighter.name} className="fighterCard">
              <img
                src={fighter.img}
                alt={fighter.name}
                className="fighterPic"
              />

              <section className="fighterName">
                <h2 className="name">{fighter.name}</h2>
                <h3 className="weightCat">{fighter.weightclass} Division</h3>
              </section>
            </article>
          </Link>
        ))}
      </div>
    </>
  );
}

export default FightersCards;
