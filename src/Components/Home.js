import React, { useRef, useEffect } from "react";
import Popular from "./Popular";
import Adventures from "./Adventures";
import Action from "./Action";
import Race from "./Race";
import Puzzle from "./Puzzle";
import Android from "./Android";
import Strategy from "./Strategy";
import Subscribed from "./Subscribed";
import "./Styles/Home.css";

//home component

function Home() {
  const carouselRef = useRef();

  const handleCarouselScroll = () => {
    if (
      carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
      carouselRef.current.scrollWidth
    ) {
      carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(handleCarouselScroll, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <h1>Home</h1>
      <div className="carousel">
        <div className="Popular-card" ref={carouselRef}>
          <Popular />
        </div>
      </div>
      <div className="Subscribed-card">
        <Subscribed />
      </div>
      <div className="Adventure-card">
        <Adventures />
      </div>
      <div className="Action-card">
        <Action />
      </div>
      <div className="Race-card">
        <Race />
      </div>
      <div className="Android-card">
        <Android />
      </div>
      <div className="Puzzle-card">
        <Puzzle />
      </div>
      <div className="Strategy-card">
        <Strategy />
      </div>
    </div>
  );
}

export default Home;
