import './Homepage.css';

function Homepage() {
  return (
    <div className="homepage-container">
      <div className="bio-container">
        <div className="header-container">
          <div className="header">
            Hey, I'm Elliot.
          </div>
          <div className="surfboard"></div>
        </div>
        <div className="bio">
          Currently, I’m a software engineer at Palantir Technologies, based in San Francisco. Previously, I was at Brown University, where I studied Computer Science. I’m particularly interested in healthtech, machine learning applications, and surfing.
        </div>
        <div className="links-container">
          <a href="mailto:kang.elliot@gmail.com" target="_blank" rel="noopener noreferrer" className="link">Email</a>
          <a href="https://www.linkedin.com/in/elliot-kang-830837128/" target="_blank" rel="noopener noreferrer" className="link">Linkedin</a>
          <a href="https://github.com/ekang98" target="_blank" rel="noopener noreferrer" className="link">Github</a>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
