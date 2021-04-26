import React from "react";
import "../../public/fonts/about.css";

export default function Info() {
  return (
    <div
      style={{
        margin: "0px auto",
        width: "1920px",
        position: "absolute",
        padding: "0px 0px",
        top: "270px"
      }}
    >
      <hr style={{ color: "#008000", top: "0px" }} />

      <h2 className="about-me">About Me</h2>
      <p className="about-me">
        I am a PhD student of Computer Science department at the Virgina Tech. I
        received my BTech degree in electrical engineering from National
        Institute of Technology, Jaipur in 2019. My current research interests
        combines the Reinforcement learning in control systems, developing
        learning methods to learn the control with less data in large scale
        systems.
      </p>
      <p className="about-me">
        I am currently being advised my "
        <a className="links" href="https://people.cs.vt.edu/hdardiry/">
          Dr. Hoda Eldardiry"
        </a>{" "}
        and "
        <a className="links" href="https://boker.ece.vt.edu">
          Dr. Almuatazbellah (Muataz) Boker"
        </a>
      </p>
      <hr style={{ color: "#008000", top: "0px" }} />
    </div>
  );
}
