function Footerr({props}) {
    return (
      <div className="App futer">
        <table id="futer">
            <tr>
                <td>{props.tri}</td>
            </tr>
            <tr>
            <td>{props.cpr}</td>
                
            </tr>
            <tr>
                <td>{props.riot}</td>
            </tr>
        </table>
      </div>
    );
  }
  
  export default Footerr;