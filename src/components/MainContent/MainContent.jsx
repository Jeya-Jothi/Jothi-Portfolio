import "./MainContent.css";
import Header from "./Header/Header";
function MainContent() {
  return (
    <div className="main-content">
      {/* Header */}
      <Header />
      <div className="content">
        <div className="portfolio-div">
          <p>PORT</p>
          <p>FOLIO.</p>
        </div>
        <div className="img-name-div">
          <div className="circle-img"></div>
          <div className="name">
            <p className="jothi-name">Jeya Jothi</p>
            <p className="des-txt">A Creative Web Developer</p>
            <p className="quote-txt">
              "Bringing ideas to life with code & design"
            </p>
          </div>
        </div>
      </div>
      <div className="scroll-arrow">
        <p className="scroll-d-txt">Scroll down</p>
        <span className="move-arrow">
          <img
            src="images/down arrow.svg"
            alt="down-arrow"
            className="down-a-img"
          />
        </span>
      </div>
    </div>
  );
}
export default MainContent;
