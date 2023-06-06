import { Link } from "react-router-dom";
import ikona5 from "../images/icons8-home-32.png";
import prvo from "../images/672px-Classic_bp-9_VALORANT.png";
import drugo from "../images/672px-Shorty_dbs-20_VALORANT.png";
import trece from "../images/672px-Frenzy_amp-11_VALORANT.png";
import cetvrto from "../images/672px-Ghost_lp-15_VALORANT.png";
import peto from "../images/672px-Sheriff_sar-6_VALORANT.png";
import sesto from "../images/Stinger_VALORANT.png";
import sedmo from "../images/672px-Spectre_VALORANT.png";
import osmo from "../images/672px-Bulldog_3x-pdr_VALORANT.png";
import deveto from "../images/672px-Guardian_dmr-04_VALORANT.png";
import deseto from "../images/672px-Phantom_sw-acr_VALORANT.png";
import jedanaesto from "../images/672px-Vandal_ar-762_VALORANT.png";
import dvanaesto from "../images/672px-Bucky_pa-12_VALORANT.png";
import trinaesto from "../images/672px-Judge_acs-12_VALORANT.png";
import cetrnaesto from "../images/672px-Marshal_lar-1887_VALORANT.png";
import petnaesto from "../images/672px-Operator_bsw-460_VALORANT.png";
import sesnaesto from "../images/672px-Odin_hmg-50_VALORANT.png";

function Weapons() {
    return (
      <div className="App">
        <div id="weapons">
        <div class="nazadveliki">
            <div><Link to='/' ><img src={ikona5}  class="slicica nazad"></img></Link>
            </div>
          </div>
          <div class="parent daa">
            <div class="velikii">
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <img src={prvo} alt="" class="gun" width="90%" height="90%"/>
              </div>
              <div class="flip-box-back">
                <h2>CLASSIC</h2>
                <h4>TYPES // SIDEARMS</h4>
                <p>Primary fire lands precise shots when still, and is equipped with an alternate burst-firing mode for close encounters.</p>
              </div>
          </div>
          </div>
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <img src={drugo} alt="" class="gun"  width="95%" height="60%"/>
              </div>
              <div class="flip-box-back">
                <h2>SHORTY</h2>
                <h4>TYPES // SIDEARMS</h4>
                <p>A nimble, short barrel shotgun that is deadly at close range but can only fire twice before needing to reload. Pairs well with long range weapons.</p>
              </div>
          </div>
          </div>
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <img src={trece} alt="" class="gun" width="70%" height="85%"/>
              </div>
              <div class="flip-box-back">
                <h2>FRENZY</h2>
                <h4>TYPES // SIDEARMS</h4>
                <p>Lightweight machine pistol that excels at firing on the move. Its high rate-of-fire can be difficult to control, so try short bursts at medium ranges.</p>
              </div>
          </div>
          </div>
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <img src={cetvrto} alt="" class="gun" width="95%" height="65%"/>
              </div>
              <div class="flip-box-back">
                <h2>GHOST</h2>
                <h4>TYPES // SIDEARMS</h4>
                <p>The Ghost is accurate and carries a large magazine if you miss. Distant targets require a controlled fire rate. Quickly tap the trigger when you can see the whites of their eyes.</p>
              </div>
          </div>
          </div>
      </div>
      <div class="velikii">
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src={peto} alt="" class="gun" width="95%" height="80%"/>
            </div>
            <div class="flip-box-back">
              <h2>SHERIFF</h2>
              <h4>TYPES // SIDEARMS</h4>
              <p>Its high-impact rounds pack a ton of recoil and require true grit to master. Wield the Sheriff right, and your enemies will know they were expendable.</p>
            </div>
        </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src={sesto} alt="" class="gun" width="95%" height="80%"/>
            </div>
            <div class="flip-box-back">
              <h2>STINGER</h2>
              <h4>TYPES // SMGS</h4>
              <p>This SMG is more potent at medium to long range than its counterparts, but at the cost of firing rate and mobility. The 20-round mag gets wasted in recoil-filled sprays, but lands lethal blows at medium distances with ADS and controlled fire.</p>
            </div>
        </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src={sedmo} alt="" class="gun" width="95%" height="80%"/>
            </div>
            <div class="flip-box-back">
              <h2>SPECTRE</h2>
              <h4>TYPES // SMGS</h4>
              <p>A jack-of-all-trades weapon with a great balance of damage, fire rate, and accuracy—at both short and mid range. It haunts the corners of every map and requires only steady aim to drop foes at long distance.</p>
            </div>
        </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src={osmo} alt="" class="gun" width="95%" height="70%"/>
            </div>
            <div class="flip-box-back">
              <h2>BUCKY</h2>
              <h4>TYPES // SHOTGUNS</h4>
              <p>Heavy but stable, Bucky’s primary fire is for holding tight corners or charging close quarters. Alternate fire strikes targets at medium range.</p>
            </div>
        </div>
        </div>
      </div>
      <div class="velikii">
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src={deveto} alt="" class="gun" width="95%" height="40%"/>
            </div>
            <div class="flip-box-back">
             <h2>JUDGE</h2>
              <h4>TYPES // SHOTGUNS</h4>
              <p>The Judge is stable at the stand but volatile when fired rapidly. Primary fire hammers short range targets and you’ll need to be steady to nail anything beyond an arm's-length.</p>
            </div>
        </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src={deseto} alt="" class="gun" width="95%" height="50%"/>
            </div>
            <div class="flip-box-back">
              <h2>BULLDOG</h2>
              <h4>TYPES // RIFLES</h4>
              <p>A surefire beast when you can pick your shots. Alt. fire lets you ADS and spew accurate, short bursts at anyone who tries you from medium to long-range.</p>
            </div>
        </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src={jedanaesto} alt="" class="gun" width="95%" height="60%"/>
            </div>
            <div class="flip-box-back">
              <h2>GUARDIAN</h2>
              <h4>TYPES // RIFLES</h4>
              <p>The designated marksman rifle. Heavier and less mobile relative to other rifles but precise and powerful. Headhunt when enemies appear at medium to long distances.</p>
            </div>
        </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src={dvanaesto} alt="" class="gun" width="95%" height="40%"/>
            </div>
            <div class="flip-box-back">
              <h2>PHANTOM</h2>
              <h4>TYPES // RIFLES</h4>
              <p>Go full auto for anyone who tests you up close and short controlled bursts scramble enemies from anywhere. Best when fired while stationary.</p>
            </div>
        </div>
        </div>
      </div>
      <div class="velikii">
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src={trinaesto} alt="" class="gun" width="95%" height="60%"/>
            </div>
            <div class="flip-box-back">
              <h2>VANDAL</h2>
              <h4>TYPES // RIFLES</h4>
              <p>The Vandal retains high damage over distance and rewards those who focus single shots at a target’s head. Extended fire results in less stability, however.</p>
            </div>
        </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src={cetrnaesto} alt="" class="gun" width="95%" height="35%"/>
            </div>
            <div class="flip-box-back">
              <h2>MARSHALL</h2>
              <h4>TYPES // SNIPERS</h4>
              <p>A nimble lever-action sniper rifle with a single zoom that can keep bullish enemies at bay. A slow rate of fire means you have to either hit the mark or leave yourself open to attacks.</p>
            </div>
        </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src={petnaesto} alt="" class="gun" width="95%" height="50%"/>
            </div>
            <div class="flip-box-back">
              <h2>OPERATOR</h2>
              <h4>TYPES // SNIPERS</h4>
              <p>A fierce bolt-action sniper rifle with high-powered dual zoom. Extremely immobile but fires an incredibly powerful round that can devastate a team with one shot.</p>
            </div>
        </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src={sesnaesto} alt="" class="gun" width="95%" height="60%"/>
            </div>
            <div class="flip-box-back">
              <h2>ODIN</h2>
              <h4>TYPES // HEAVIES</h4>
              <p>Suppressive, high damage fire with surprising stability. Spray enemies at short range and use alt. fire to make yourself a living turret.</p>
            </div>
        </div>
        </div>
    </div>
    </div>
    </div>
      </div>
    );
  }
  
  export default Weapons;