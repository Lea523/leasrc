import { Link } from "react-router-dom";
import ikona5 from "../images/icons8-home-32.png";

function Signup() {
    return (
      <div className="App">
        <div class="w3-padding-64" id="signup">
        <div class="nazadveliki">
            <div><Link to='/' ><img src={ikona5}  class="slicica nazad"></img></Link>
            </div>
          </div>
      <div class="containerr da">
        <h2  class="val"><span class="gori">Signup to Riot Games</span></h2>
      <form action="your_signup_processing_script.php" method="POST">
        <div class="form-group">
          <label for="username">USERNAME:</label>
          <input type="text" id="username" name="username" placeholder="Type username..." required/>
        </div>
        <div class="form-group">
          <label for="email">EMAIL:</label>
          <input type="email" id="email" name="email" placeholder="Type email..." required/>
        </div>
        <div class="form-group">
          <label for="password">PASSWORD:</label>
          <input type="password" id="password" name="password" placeholder="Type password..." required/>
        </div>
        <div class="form-group">
          <label for="confirm_password">CONFIRM PASSWORD:</label>
          <input type="password" id="confirm_password" name="confirm_password" placeholder="Type password again..." required/>
        </div>
        <div class="form-group"><label for="region">REGION</label>
              <select id="region" name="region">
                <option value="eune">EUNE(Europe Nordic & East)</option>
                <option value="euw">EUW(Europe West)</option>
                <option value="na">LAN(Latin America North)</option>
                <option value="na">LAS(Latin America South)</option>
                <option value="na">OCE(Oceania)</option>
                <option value="na">RU(Russia)</option>
                <option value="na">TR(Turkey)</option>
                <option value="na">JP(Japan)</option>
                <option value="na">KR(Republic of Korea)</option>
                <option value="na">PH(The Philippines)</option>
                <option value="na">SG(Singapore, Malaysia & Indonesia)</option>
                <option value="na">TW(Taiwan, Hong Kong and Macao)</option>
                <option value="na">TH(Thailand)</option>
                <option value="na">VN(Vietnam)</option>
              </select>
            </div> 
        
        <div class="form-group"> 
          <input type="submit"  class="val btn" value="SIGNUP"/>
        </div>
      </form>
    </div>
    </div>

      </div>
    );
  }
  
  export default Signup;