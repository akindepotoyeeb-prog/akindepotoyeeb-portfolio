import React from "react";

export default function Home() {
  return (
    <div className="home section-p1 section-m1">
      <div className="hero animate-dropdown">
        <h2>I am Akindepo Toyeeb</h2>
        <h1>Full-stack Developer</h1>
        <p>
          I build full-stack web applications with a strong focus on clean
          UI/UX, performance, and scalability. Skilled in both frontend design
          and backend development, I create seamless digital experiences from
          start to finish.
        </p>
        <button className="normal">VIEW MY WORKS</button>
      </div>
      <div className="hero-left">
        <div className="circle"></div>
        <div className="homeImg">
          <img
            src="/images/Toyeeb.png"
            alt=""
            className="animate-scaleout"
            // style={{
            //   width: "100%",
            //   backgroundSize: "60%",
            //   backgroundRepeat: "no-repeat",
            //   backgroundPosition: "center",

            // }}
          />
          <div>
            <div className="uiux hang animate-slideIn">UI/UX Designer</div>
            <div className="frontend hang animate-slideIn">
              Front-End Developer
            </div>
            <div className="backend hang animate-slideFRight">
              Back-End Developer
            </div>
          </div>
        </div>
      </div>
      <marquee bgcolor="#7c3aed">
        ⭐ UI/UX-Design ⭐ FrontEnd-Developer ⭐ BackEnd-Developer ⭐
        FullStack-Developer ⭐ UI/UX-Design ⭐ FrontEnd-Developer ⭐
        BackEnd-Developer ⭐ FullStack-Developer ⭐ UI/UX-Design ⭐
        FrontEnd-Developer ⭐ BackEnd-Developer ⭐ FullStack-Developer
      </marquee>
    </div>
  );
}
