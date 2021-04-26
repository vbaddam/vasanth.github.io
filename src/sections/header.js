//import "./syles.css";
import React from "react";
import { Link } from "react-router";
import twitter from "../images/twitter.gif";
import linkedin from "../images/linkedin.gif";
import github from "../images/github.gif";
import Publications from "../images/Publications.gif";
import home from "../images/home.gif";

export default function Header() {
  return (
    <nav className="nav-style">
      <div>
        <a className="marquee" href="https://twitter.com/vasanthreddy18">
          Home
        </a>
        <img className="extras-gif" src={home} alt="" />
      </div>
      <div>
        <a className="marquee" href="https://twitter.com/vasanthreddy18">
          Publications
        </a>
        <img className="extras-gif" src={Publications} alt="" />
      </div>
      <div>
        <a className="marquee" href="https://twitter.com/vasanthreddy18">
          Twitter
        </a>
        <img className="extras-gif" src={twitter} alt="" />
      </div>
      <div>
        {" "}
        <a className="marquee" href="https://twitter.com/vasanthreddy18">
          Github
        </a>
        <img className="extras-gif" src={github} alt="" />{" "}
      </div>
      <div>
        {" "}
        <a className="marquee" href="https://twitter.com/vasanthreddy18">
          LinkedIn
        </a>
        <img className="extras-gif" src={linkedin} alt="" />{" "}
      </div>
    </nav>
  );
}
