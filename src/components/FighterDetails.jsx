import React from "react";
import { useParams } from "react-router-dom";
import fighterStat from "../services/fighterStat";
import "../styles/FighterDetails.css";

const FighterDetails = () => {
  const { id } = useParams();
  const fighter = fighterStat.find((fighter) => fighter.id === parseInt(id));

  return (
    <div className="fighterDetailsContainer">
      <div className="fighter-infos">
        <section className="fighter-stats">
          <h1 className="fighter-name">
            {" "}
            {fighter.name} <br />
            <span className="nickname">{fighter.nickname}</span>
          </h1>
          <h2>{fighter.weightclass} Division</h2>
          <p className="stats">
            {fighter.wins}-{fighter.losses}-{fighter.draws} (W-L-D)
          </p>
          <p className="infos">
            Stance: <span>{fighter.stance}</span>
          </p>
          <p className="infos">
            Date of birth: <span>{fighter.date_of_birth}</span>
          </p>
          <p className="PhysicalInfos">
            Height: <span>{fighter.height_cm} cm</span>
          </p>
          <p className="PhysicalInfos">
            Weight: <span>{fighter.weight_in_kg} kg</span>
          </p>
          <p className="PhysicalInfos">
            Reach: <span>{fighter.reach_in_cm} cm</span>
          </p>
        </section>
        <img src={fighter.img} alt={fighter.name} className="fighterPicture" />
        <section className="infosAccuracy">
          <h3>Significant statistics</h3>
          <p className="infosFight">
            Strikes landed per minute:{" "}
            <span>{fighter.significant_strikes_landed_per_minute}</span>
          </p>
          <p className="infosFight">
            Striking accuracy:{" "}
            <span>{fighter.significant_striking_accuracy}</span>
          </p>
          <p className="infosFight">
            Strikes absorbed per minute:{" "}
            <span>{fighter.significant_strikes_absorbed_per_minute}</span>
          </p>
          <p className="infosFight">
            Strike defence: <span>{fighter.significant_strike_defence}</span>
          </p>
          <p className="infosFight">
            Average takedowns landed per 15 min:{" "}
            <span>{fighter.average_takedowns_landed_per_15_minutes}</span>
          </p>
          <p className="infosFight">
            Takedown accuracy: <span>{fighter.takedown_accuracy}</span>
          </p>
          <p className="infosFight">
            takedown defense: <span>{fighter.takedown_defense}</span>
          </p>
          <p className="infosFight">
            Average submissions attempted per 15 min:{" "}
            <span>{fighter.average_submissions_attempted_per_15_minutes}</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default FighterDetails;
