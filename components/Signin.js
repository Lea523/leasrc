import { Link } from "react-router-dom";
import ikona5 from "../images/icons8-home-32.png";

function Signin() {
    return (
      <div className="App">
        <div id="signin">
          <div class="nazadveliki">
            <div><Link to='/' ><img src={ikona5}  class="slicica nazad"></img></Link>
            </div>
          </div>
      <div class="containerr da">
        <h2 class="val"><span class="gori">Login to Riot Games</span></h2> <br/>
        <form>
          <div class="form-group">
            <label for="username">USERNAME</label>
            <input type="text" id="username" name="username" placeholder="Type your username..." required/>
          </div>
          <div class="form-group">
            <label for="password">PASSWORD</label>
            <input type="password" id="password" name="password" placeholder="Type your password..." required/>
          </div>
          <div class="form-group">
            <div class="kys">
              <input type="checkbox" name="ssii" id="ssii" class="ssi"/>
              <span class="dignise">STAY SIGNED IN</span>
            </div>
        </div>
          <button type="submit" class="btn val" >Login</button>
          
        </form>
        
        <p class="text-center">Don't have an account? <Link to='/signup' id="plavi">Sign up</Link></p>
      </div>
    </div>
      </div>
    );
  }
  
  export default Signin;