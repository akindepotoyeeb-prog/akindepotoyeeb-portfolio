import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { MdOutlineConstruction } from "react-icons/md";

export default function FullStack() {
  return (
    <section style={{ width: "100%" }}>
      <div style={{ width: "100%", backgroundColor: "#c3c3c3" }}>
        <div className="abt-flex animate-slideIn">
          <Link to="/" className="button back-link">
            <HiOutlineArrowNarrowLeft /> <span>Back</span>
          </Link>
          <h2 className="animate-dropdown">Full-Stack Development</h2>
        </div>
      </div>
      <div className="detail-page section-p1">
        <div
          style={{
            textAlign: "center",
            color: "#aaaaaa",
            backgroundColor: "#ebebeb",
            margin: "20px",
            padding: "10px",
            borderRadius: "15px",
            border: "1px solid #aaaaaa",
            
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#aaaaaa",
              backgroundColor: "#ebebeb",
              marginBottom: "10px",
              padding: "10px",
              fontSize: "30px",
            }}
          >
            Under Constuction ⚒⛏
          </h1>
          <div
            style={{
              width: "200px",
              height: "200px",
              textAlign: "center",
              color: "#aaaaaa",
              margin: "auto",
              fontSize: "200px",
              borderRadius: "15px",
              border: "1px solid #aaaaaa",
            }}
          >
            <MdOutlineConstruction />
          </div>
        </div>
      </div>
    </section>
  );
}
