import rankingPoundForPound from "../services/rankingPoundForPound";
import rankingFlyweight from "../services/rankingFlyweight";
import rankingBantamweight from "../services/rankingBantamweight";
import rankingFeathertweight from "../services/rankingFeatherweight";
import rankingLightweight from "../services/rankingLightweight";
import rankingWelterweight from "../services/rankingWelterweight";
import rankingMiddleweight from "../services/rankingMiddleweight";
import rankingLightHeavyweight from "../services/rankingLightHeavyweight";
import rankingHeavyweight from "../services/rankingHeavyweight";
import Makhachev from "../assets/lightweight/MAKHACHEV_ISLAM_BELT.png";
import Pantoja from "../assets/flyweight/PANTOJA_ALEXANDRE_BELT.png";
import Sean from "../assets/bantamweight/OMALLEY_SEAN_BELT.png";
import Topuria from "../assets/featherweight/TOPURIA_ILIA_BELT.png";
import LeonEdwards from "../assets/welterweight/EDWARDS_LEON_BELT.png";
import Dricus from "../assets/middleweight/DU_PLESSUS_DRICUS_BELT.png";
import Pereira from "../assets/lightheavyweight/PEREIRA_ALEX_BELT.png";
import Jones from "../assets/heavyweight/JONES_JON_BELT.png";

import { Link } from "react-router-dom";

import "../styles/RankingPage.css";

function RankingList() {
  return (
    <>
      <h1 className="rankingTitle">Fighters Ranking</h1>
      <div className="Ranking-container">
        <div className="PFP-Ranking">
          <section className="PFP-Champ">
            <div className="infos">
              <h2 className="Division">
                MEN'S POUND-FOR-POUND <span className="topRank">TOP RANK</span>
              </h2>
              <h3>ISLAM MAKHACHEV</h3>
              <h4>CHAMPION</h4>
              <img src={Makhachev} alt="Islam Makhachev" />
            </div>
          </section>
          {rankingPoundForPound.map((RankingPFP) => (
            <table>
              <tbody>
                <tr>
                  <td className="RankNbr">{RankingPFP.rank}</td>
                  <td className="RankFighter">{RankingPFP.fighter}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
        <div className="Fly-Ranking">
          <section className="Fly-Champ">
            <div className="infos">
              <h2 className="Division">FLYWEIGHT</h2>
              <h3>ALEXANDRE PANTOJA</h3>
              <h4>CHAMPION</h4>
              <img src={Pantoja} alt="Alexandre Pantoja" />
            </div>
          </section>
          {rankingFlyweight.map((RankingFly) => (
            <table>
              <tbody>
                <tr>
                  <td className="RankNbr">{RankingFly.rank}</td>
                  <td className="RankFighter">{RankingFly.fighter}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
        <div className="Bantam-Ranking">
          <section className="Bantam-Champ">
            <div className="infos">
              <h2 className="Division">BANTAWEIGHT</h2>
              <h3>SEAN O'MALLEY</h3>
              <h4>CHAMPION</h4>
              <img src={Sean} alt="Sean O'Malley" />
            </div>
          </section>
          {rankingBantamweight.map((RankingBantam) => (
            <table>
              <tbody>
                <tr>
                  <td className="RankNbr">{RankingBantam.rank}</td>
                  <td className="RankFighter">{RankingBantam.fighter}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
        <div className="Feather-Ranking">
          <section className="Feather-Champ">
            <div className="infos">
              <h2 className="Division">FEATHERWEIGHT</h2>
              <h3>ILIA TOPURIA</h3>
              <h4>CHAMPION</h4>
              <img src={Topuria} alt="Ilia Topuria" />
            </div>
          </section>
          {rankingFeathertweight.map((RankingFeather) => (
            <table>
              <tbody>
                <tr>
                  <td className="RankNbr">{RankingFeather.rank}</td>
                  <td className="RankFighter">{RankingFeather.fighter}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
        <div className="Light-Ranking">
          <section className="Light-Champ">
            <div className="infos">
              <h2 className="Division">LIGHTWEIGHT</h2>
              <h3>ISLAM MAKHACHEV</h3>
              <h4>CHAMPION</h4>
              <img src={Makhachev} alt="Islam Makhachev" />
            </div>
          </section>
          {rankingLightweight.map((RankingLight) => (
            <table>
              <tbody>
                <tr>
                  <td className="RankNbr">{RankingLight.rank}</td>
                  <td className="RankFighter">{RankingLight.fighter}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
        <div className="Welter-Ranking">
          <section className="Welter-Champ">
            <div className="infos">
              <h2 className="Division">WELTERWEIGHT</h2>
              <h3>LEON EDWARDS</h3>
              <h4>CHAMPION</h4>
              <img src={LeonEdwards} alt="Leon Edwards" />
            </div>
          </section>
          {rankingWelterweight.map((RankingWelter) => (
            <table>
              <tbody>
                <tr>
                  <td className="RankNbr">{RankingWelter.rank}</td>
                  <td className="RankFighter">{RankingWelter.fighter}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
        <div className="Middle-Ranking">
          <section className="Middle-Champ">
            <div className="infos">
              <h2 className="Division">MIDDLEWEIGHT</h2>
              <h3>DRICUS DU PLESSIS</h3>
              <h4>CHAMPION</h4>
              <img src={Dricus} alt="Dricus Du Plessis" />
            </div>
          </section>
          {rankingMiddleweight.map((RankingMiddle) => (
            <table>
              <tbody>
                <tr>
                  <td className="RankNbr">{RankingMiddle.rank}</td>
                  <td className="RankFighter">{RankingMiddle.fighter}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
        <div className="LightHeavy-Ranking">
          <section className="LightHeavy-Champ">
            <div className="infos">
              <h2 className="Division">LIGHT HEAVYWEIGHT</h2>
              <h3>ALEX PEREIRA</h3>
              <h4>CHAMPION</h4>
              <img src={Pereira} alt="Alex Pereira" />
            </div>
          </section>
          {rankingLightHeavyweight.map((RankingLightHeavy) => (
            <table>
              <tbody>
                <tr>
                  <td className="RankNbr">{RankingLightHeavy.rank}</td>
                  <td className="RankFighter">{RankingLightHeavy.fighter}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
        <div className="Heavy-Ranking">
          <section className="Heavy-Champ">
            <div className="infos">
              <h2 className="Division">HEAVYWEIGHT</h2>
              <h3>JON JONES</h3>
              <h4>CHAMPION</h4>
              <img src={Jones} alt="Jon Jones" />
            </div>
          </section>
          {rankingHeavyweight.map((RankingHeavy) => (
            <table>
              <tbody>
                <tr>
                  <td className="RankNbr">{RankingHeavy.rank}</td>
                  <td className="RankFighter">{RankingHeavy.fighter}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      </div>
    </>
  );
}
export default RankingList;
