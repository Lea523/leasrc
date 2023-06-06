import prva from "../images/Loading_Screen_Ascent.jpg";
import druga from "../images/Loading_Screen_Bind.jpg";
import treca from "../images/Loading_Screen_Breeze.jpg";
import cetvrta from "../images/Loading_Screen_Fracture.jpg";
import peta from "../images/Loading_Screen_Haven.jpg";
import sesta from "../images/Loading_Screen_Icebox.jpg";
import sedma from "../images/Loading_Screen_Lotus.jpg";
import osma from "../images/Loading_Screen_Pearl.jpg";
import deveta from "../images/Loading_Screen_Split.jpg";
import ikona5 from "../images/icons8-home-32.png";
import { Link } from "react-router-dom";


function Maps() {
    return (
      <div className="App">
        <div id="maps">
        <div class="nazadveliki aaa">
            <div><Link to='/' ><img src={ikona5}  class="slicica nazad"></img></Link>
            </div>
          </div>
      <div class="parent da">
        <div id="veliki">
          <div>
            <div class="flip-box2">
              <div class="flip-box-inner2">
                <div class="flip-box-front2">
                  <img src={prva} alt="" width="600px" height="350px"/>
                </div>
                <div class="flip-box-back2">
                  <h2>ASCENT</h2>
                  <p class="par">An open playground for small wars of position and attrition divide two sites on Ascent. Each site can be fortified by irreversible bomb doors; once they’re down, you’ll have to destroy them or find another way. Yield as little territory as possible.</p>
                </div>
            </div>
            </div>
          </div>
          <div>
            <div class="flip-box2">
              <div class="flip-box-inner2">
                <div class="flip-box-front2">
                  <img src={druga} alt="" width="600px" height="350px"/>
                </div>
                <div class="flip-box-back2">
                  <h2>BIND</h2>
                  <p class="par">Two sites. No middle. Gotta pick left or right. What’s it going to be then? Both offer direct paths for attackers and a pair of one-way teleporters make it easier to flank.</p>
                </div>
            </div>
            </div>
          </div>
          <div>
            <div class="flip-box2">
              <div class="flip-box-inner2">
                <div class="flip-box-front2">
                  <img src={treca} alt="" width="600px" height="350px"/>
                </div>
                <div class="flip-box-back2">
                  <h2>BREEZE</h2>
                  <p class="par">Take in the sights of historic ruins or seaside caves on this tropical paradise. But bring some cover. You'll need them for the wide open spaces and long range engagements. Watch your flanks and this will be a Breeze.</p>
                </div>
            </div>
            </div>
          </div>
        </div>
        <div class="veliki">
          <div>
            <div class="flip-box2">
              <div class="flip-box-inner2">
                <div class="flip-box-front2">
                  <img src={cetvrta} alt="" width="600px" height="350px"/>
                </div>
                <div class="flip-box-back2">
                  <h2>FRACTURE</h2>
                  <p class="par">A top secret research facility split apart by a failed radianite experiment. With defender options as divided as the map, the choice is yours: meet the attackers on their own turf or batten down the hatches to weather the assault.</p>
                </div>
            </div>
            </div>
          </div>
          <div>
            <div class="flip-box2">
              <div class="flip-box-inner2">
                <div class="flip-box-front2">
                  <img src={peta} alt="" width="600px" height="350px"/>
                </div>
                <div class="flip-box-back2">
                  <h2>HEAVEN</h2>
                  <p class="par">Beneath a forgotten monastery, a clamour emerges from rival Agents clashing to control three sites. There’s more territory to control, but defenders can use the extra real estate for aggressive pushes.</p>
                </div>
            </div>
            </div>
          </div>
          <div>
            <div class="flip-box2">
              <div class="flip-box-inner2">
                <div class="flip-box-front2">
                  <img src={sesta} alt="" width="600px" height="350px"/>
                </div>
                <div class="flip-box-back2">
                  <h2>ICEBOX</h2>
                  <p class="par">Your next battleground is a secret Kingdom excavation site overtaken by the arctic. The two plant sites protected by snow and metal require some horizontal finesse. Take advantage of the ziplines and they’ll never see you coming.</p>
                </div>
            </div>
            </div>
          </div>
        </div>
        <div class="veliki">
          <div>
            <div class="flip-box2">
              <div class="flip-box-inner2">
                <div class="flip-box-front2">
                  <img src={sedma} alt="" width="600px" height="350px"/>
                </div>
                <div class="flip-box-back2">
                  <h2>LOTUS</h2>
                  <p class="par">FA mysterious structure housing an astral conduit radiates with ancient power. Great stone doors provide a variety of movement opportunities and unlock the paths to three mysterious sites.</p>
                </div>
            </div>
            </div>
          </div>
          <div>
            <div class="flip-box2">
              <div class="flip-box-inner2">
                <div class="flip-box-front2">
                  <img src={osma} alt="" width="600px" height="350px"/>
                </div>
                <div class="flip-box-back2">
                  <h2>PEARL</h2>
                  <p class="par">Attackers push down into the Defenders on this two-site map set in a vibrant, underwater city. Pearl is a geo-driven map with no mechanics. Take the fight through a compact mid or the longer range wings in our first map set in Omega Earth.</p>
                </div>
            </div>
            </div>
          </div>
          <div>
            <div class="flip-box2">
              <div class="flip-box-inner2">
                <div class="flip-box-front2">
                  <img src={deveta} alt="" width="600px" height="350px"/>
                </div>
                <div class="flip-box-back2">
                  <h2>SPLIT</h2>
                  <p class="par">If you want to go far, you’ll have to go up. A pair of sites split by an elevated center allows for rapid movement using two rope ascenders. Each site is built with a looming tower vital for control. Remember to watch above before it all blows sky-high.</p>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      </div>
    );
  }
  
  export default Maps;