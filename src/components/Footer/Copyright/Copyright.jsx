import "./Copyright.css";
function Copyright() {
  return (
    <div className="copyright-div">
      <p>{new Date().getFullYear()}</p>
      <img
        src="images/copyright icon.svg"
        alt="copyright icon"
        className="cpr-img"
      />
      <p> Jeya Jothi | All rights reserved</p>
    </div>
  );
}
export default Copyright;
