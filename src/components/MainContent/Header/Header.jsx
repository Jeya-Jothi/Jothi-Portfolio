import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="logo-div">
        <img src="images/JJ logo.svg" alt="JJ logo" className="logo-img" />
      </div>
      <div className="navi">
        <p id="home">Home</p>
        <a href="#about">
          <p>About</p>
        </a>
        <a href="#projects">
          <p>Projects</p>
        </a>
        <a href="#contact">
          <p>Contact</p>
        </a>
      </div>
    </div>
  );
}
export default Header;
