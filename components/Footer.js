import Footerr from "./Footerr";

function Footer() {
    let futer = {
        tri: ". . .",
        cpr: "© COPYRIGHT",
        riot: "Riot Games"
    }
    return (
      <div className="App">
        <Footerr props={futer}/>
      </div>
    );
  }
  
  export default Footer;