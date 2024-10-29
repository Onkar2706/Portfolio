import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";


function Home() {
  return (
    <div className="home">
      <div className="about"></div>
      <h2>Hi, my name is Onkar.</h2>
      <div className="prompt"></div>
      <p>A software developer with a passion for learning and creating.</p>
      <a
            href="https://www.linkedin.com/in/onkarmahamuni/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a href="mailto:onkarmahamuni007@gmail.com"> 
            <EmailIcon />
          </a>
          <a
            href="https://github.com/Onkar2706"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>

      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ol>
        </div>
    </div>
  );
}

export default Home;