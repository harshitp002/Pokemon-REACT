import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/Harshit.jpeg";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi! I am Harshit Paliwal</h1>
      <h2 className="profile-text">THE CREATOR OF THIS AWESOME POKEDEX</h2>
      <h4 className="profile-text">
        This project is to show the SCSS,React,Redux Toolkit,Typescript,Firebase  skills.
      </h4>
      <div className="profile-links">
        <a href="https://github.com/harshitp002">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/harshit-paliwal-4879ab228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
