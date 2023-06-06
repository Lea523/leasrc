import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import ikona1 from "../images/icons8-standing-man-32.png";
import ikona2 from "../images/icons8-map-32.png";
import ikona3 from "../images/icons8-assault-rifle-50.png";
import ikona4 from "../images/icons8-password-key-32.png";
import ikona5 from "../images/icons8-home-32.png";

function Home() {
    return (
      <div className="App sve">
        <ul class="navb">
            <li><a href="https://playvalorant.com/de-de/"><img src={logo}  class="slicica"></img></a></li>
            <li><Link to='/' class="active"><img src={ikona5}  class="slicica"></img></Link></li>
            <li><Link to='agents'><img src={ikona1} class="slicica"></img></Link></li>
            <li><Link to='maps'><img src={ikona2} class="slicica"></img></Link></li>
            <li><Link to='weapons'><img src={ikona3} class="slicica"></img></Link></li>
            <li><Link to='signin'><img src={ikona4} class="slicica"></img></Link></li>
            {/* <li><Link to='signup'><img src={ikona5} class="slicica"></img></Link></li> */}
        </ul> 
        <header class="w3-center crnosivo" id="home">
      <div id="header">
        <video preload="true" autoplay="" muted="" loop="" playsinline="" data-testid="hero:video">
          <source
            src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt778f65cedfee54fd/63bcad5b08dfb21202a7794d/VAL_Ep6_Homepage-CG-Video_V5.mp4"
            type="video/mp4" id="bg_video"/>
        </video>
        <div id="tekst">
          <div id="">
            <h3>A 5v5 character-based tactical shooter</h3>
            <h1>VALORANT</h1>
            <div id="head_text">
              <p>Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend
                your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think
                faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well
                as Deathmatch and Spike Rush.</p>
            </div>
            <div class="playbtn">
              <div class="button__container">
                <button class="button">
                  <p class="button__label">
                    <span class="button__hover-mask"></span>
                    <span class="button__label-text">play for free</span>
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
      </div>
    );
  }
  
  export default Home