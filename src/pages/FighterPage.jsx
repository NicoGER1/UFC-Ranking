import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/FighterPage.css";
import fighterStat from "../services/fighterStat";

function FighterPage() {
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
      <NavBar />
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
            <option value={weightClass}>{weightClass}</option>
          ))}
        </select>
      </div>
      <div className="article-container">
        {filteredFighters.map((fighter) => (
          <article key={fighter.name} className="fighterCard">
            <img src={fighter.img} alt={fighter.name} className="fighterPic" />
            <div className="fighterInfos">
              <section className="fighterName">
                <h2 className="name">{fighter.name}</h2>
                <h3 className="weightCat">{fighter.weightclass} Weightclass</h3>
              </section>
              <section className="fighterStats">
                <p className="stats">
                  {fighter.wins}-{fighter.losses}-{fighter.draws} (W-L-D)
                </p>

                <p className="infos">Stance: {fighter.stance}</p>
                <p className="infos">Date of birth: {fighter.date_of_birth}</p>
              </section>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default FighterPage;
