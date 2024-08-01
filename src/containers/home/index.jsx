import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FaLinkedin, FaInstagram , FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Rakshith
          <br />
          Aspiring Software Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translateY(0px)",
        }}
      >
        <div className="home__contact-me">
          <div className="home__contact-me__items">
            <button onClick={handleNavigateToContactMePage}>Hire Me</button>
            <a href="https://drive.google.com/file/d/12CGAJsHijkx-s_pfX2KtXe9t4yVy4sGi/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" >
              View Resume
            </a>
          </div>
          <div className="home__contact-me__socials-wrapper">
            <Link to="https://in.linkedin.com/in/rakshith-annaldesh-b61025246" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaLinkedin size={25} />
            </Link>
            <Link to="https://github.com/rakshith-annaldesh" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaGithub size={25} />
            </Link>
            <Link to="https://leetcode.com/u/rakshith_04/" target="_blank" rel="noopener noreferrer" className="icon-link">
              <SiLeetcode size={25} />
            </Link>
            <Link to="https://www.instagram.com/_this_is_rakshith_" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaInstagram size={25} />
            </Link>
          </div>
        </div>
      </Animate>
    </section>
  );
};
export default Home;
