import React from "react";
import "../../public/fonts/about.css";
import New from "../images/New.gif";

export default function News() {
  return (
    <div
      style={{
        margin: "0px auto",
        width: "1920px",
        position: "absolute",
        padding: "0px 0px ",
        top: "470px"
      }}
    >
      <h2 className="news-me"> Extras </h2>
      <div id="content"></div>
      <div className="extrabox">
        <div>
          <a className="marquee" href="vt.edu">
            {" "}
            Joined as a PhD student in computer science department at Virginia
            Tech (2020){" "}
          </a>{" "}
          <img className="extras-gif" src={New} alt="" />
          <hr className="extras-hr" />
          <a className="marquee" href="vt.edu">
            {" "}
            Joined a MS student in computer science department at Virgina Tech
            (2019)){" "}
          </a>{" "}
          <img className="extras-gif" src={New} alt="" />
          <hr className="extras-hr" />
        </div>
      </div>
    </div>
  );
}
