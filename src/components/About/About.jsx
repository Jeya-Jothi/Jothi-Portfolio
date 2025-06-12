import "./About.css";
import skills from "../../data/skills";

function About() {
  return (
    <div className="about-div" id="about">
      <div className="about-head-div">
        <p>About Me</p>
      </div>
      <div className="about-me-cards">
        <div className="left-card">
          <div className="myself-card">
            <div className="card-head">
              <p className="card-head-txt">Who am I?</p>
              <img src="images/hi icon.svg" alt="hi icon" className="hi-img" />
            </div>
            <div>
              <p className="card-content">
                Hi, I'm Jeya Jothi, a passionate Web Developer. I love turning
                creative ideas into real-world websites and applications using
                modern web technologies.
              </p>
            </div>
          </div>
          <div className="goal-card">
            <div className="card-head">
              <p className="card-head-txt">My Goal?</p>
              <img
                src="images/goal icon.svg"
                alt="goal icon"
                className="goal-img"
              />
            </div>
            <div>
              <p className="card-content">
                My goal is to keep learning, create meaningful digital
                experiences, and grow as a full stack developer while working
                with innovative teams.
              </p>
            </div>
          </div>
        </div>
        <div className="right-card">
          <div className="card-head">
            <p className="card-head-txt">Skills</p>
            <div className="light-off-img"></div>
          </div>

          <div className="skills-icon">
            {skills.map((skill) => {
              return (
                <div className="skill-name">
                  <img
                    src={`images/${skill.img}`}
                    alt={skill.name}
                    className="skill-icon-img"
                  />
                  <p>{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="art-card">
        <p className="card-head-txt art-card-head">My Artistic Side</p>
        <p className="card-content">
          Apart from coding, I'm an artist at heart. I love drawing, painting,
          and creating abstract art like Zentangle. I believe creativity
          enhances the way I write code and design websites.
        </p>
      </div>
    </div>
  );
}
export default About;
