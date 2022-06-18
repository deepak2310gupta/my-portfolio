import "./about.css";
import about from '../../images/about.jpg'

export const About = () => {
  return (
    <div className="a-wrapper">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={about}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
         I am a final year undergrad student at Bharati Vidyapeeth's College of Engineering, New Delhi. I am currently working as an Intern in Unthinkable Solutions as a React Js Developer.
        </p>
        <p className="a-desc">
          I am familiar with Java, Bootstrap, React Js and SQL.
        </p>
        <div className="a-award"></div>
      </div>
    </div>
  );
};
