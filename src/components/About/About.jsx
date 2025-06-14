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
                Hi, I'm on a journey to become a skilled full stack developer -
                currently building meaningful digital projects and expanding my
                skills while seeking opportunities to join a creative and
                growth-focused team.
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
                My goal is to keep learning, build meaningful digital projects,
                and grow into a skilled full stack developer while looking
                forward to joining a team that values creativity and clean code.
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
            {skills.map((skill, index) => {
              return (
                <div className="skill-name" key={index}>
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
          Beyond coding, I'm an artist at heart. I enjoy drawing, painting, and
          exploring abstract styles like Zentangle. I believe that creativity
          not only fuels my artwork but also helps me think differently when
          writing code and designing websites.
        </p>
      </div>
    </div>
  );
}
export default About;
