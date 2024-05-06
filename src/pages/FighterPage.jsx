import React from "react";
import NavBar from "../components/NavBar";
import "../styles/FighterPage.css";
import fighterStat from "../services/fighterStat";

function FighterPage() {
  return (
    <>
      <NavBar />
      <h1 className="statTitle">Tous les combattants</h1>
      <div className="article-container">
        {fighterStat.map((fighter) => (
          <article key={fighter.name} className="fighterCard">
            <img src={fighter.img} alt={fighter.name} className="fighterPic" />
            <div className="fighterInfos">
              <section className="fighterName">
                <h2 className="name">{fighter.name}</h2>
                <h3 className="weightCat">{fighter.weightclass} Division</h3>
              </section>
              <section className="fighterStats">
                <p className="stats">
                  {fighter.wins}-{fighter.losses}-{fighter.draws} (W-L-D)
                </p>

                <p className="infos">Stance: {fighter.stance}</p>
                <p className="infos">
                  Date de naissance: {fighter.date_of_birth}
                </p>
              </section>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default FighterPage;
