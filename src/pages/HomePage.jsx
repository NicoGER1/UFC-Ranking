import "../styles/HomePage.css";
import NavBar from "../components/NavBar";

function HomePage() {
  return (
    <div className="HomeContainer">
      <NavBar />
      <h1 className="titleHome">NEXT MAIN EVENT</h1>
      <div className="event-container">
        <h2 className="eventNbr">UFC 302</h2>
        <p className="eventFighter">MAKHACHEV</p>
        <p className="versus">- VS -</p>
        <p className="eventFighter">POIRIER</p>
        <p className="eventDate">Sunday, june 2 / 4:00 AM GMT+2</p>
        <p className="eventPlace">Prudential Center, Newark USA.</p>
      </div>
    </div>
  );
}
export default HomePage;
