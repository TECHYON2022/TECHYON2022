import React, { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../styles/hero.css";

function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  const [text] = useTypewriter({
    words: ["Here !!!!", "Here !!!!", "Here !!!!"],
    loop: 0,
    typeSpeed: 80,
    deleteSpeed: 50,
  });

  useEffect(() => {
    if (window) {
      if (window.matchMedia("(max-width: 500px)").matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
  }, []);
  return (
    <>
      <div
        className={`${
          isMobile ? "" : "vh-100"
        } hero-bg d-flex row align-items-center m-0 p-0 w-100 mb-4`}
      >
        <div
          className={`${
            isMobile ? "col-12 mt-5" : "col-6 row justify-content-center"
          } p-0 m-0`}
        >
          <div className={`${isMobile ? "col-12 p-4" : "col-6"} p-0 m-0`}>
            <h1 className={`${isMobile ? "fs-38" : "fs-48"} hero-text`}>
              Our Very Own <span className="color-accent">Tech Event</span> Is{" "}
              <br></br>
              <span className="type">{text}</span>
              <Cursor />
            </h1>
            <h6 className={`${isMobile ? "fs-18" : "fs-28"} hero-date mt-4`}>
              27th OCT - 29th OCT
            </h6>
            <button className="btn btn-custom mt-4 py-2 px-3">Schedule</button>
          </div>
        </div>
        <div className={`${isMobile ? "col-12" : "col-6"} p-0 m-0 container frame-container`}>
            <p style={{textAlign: "center"}}><iframe
              width="85%"
              height="280"
              src={`https://www.youtube.com/embed/odH2dRfuOlQ`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              clasName="frame"
            /></p>
          <h3
            className={`${
              isMobile ? "fs-14" : "fs-20"
            } college-text text-center bolder pt-3`}
          >
            PCCE GOA ANNUAL TECHNICAL COLLEGE FEST
          </h3>
        </div>
      </div>
    </>
  );
}

export default Hero;
