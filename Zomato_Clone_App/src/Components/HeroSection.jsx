import React, { useState } from "react";
import SearchBar from "./SearchBar";
import foodImage from "../assets/food.png";
import Navbar from "./Navbar";
const HeroSection = () => {
  const [query, setQuery] = useState("");

  return (
    <>
      <section
        className="relative h-screen"
        style={{
          backgroundImage: `url(${foodImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-6xl md:text-8xl font-bold">zomato</h1>
          <br />
          <h2 className="text-4xl md:text-3xl">
            Discover the best food & drinks in your city
          </h2>
          <SearchBar query={query} setQuery={setQuery} />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
