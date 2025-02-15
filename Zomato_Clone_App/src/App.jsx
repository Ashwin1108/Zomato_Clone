import React from "react";

import HeroSection from "./Components/HeroSection";
import Categories from "./Components/Categories";
import Collections from "./Components/Collections";
import Localities from "./Components/Localities";
import GetApp from "./Components/GetApp";
import ExploreOptions from "./Components/ExploreOptions";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <HeroSection />
      <Categories />
      <Collections />
      <Localities />
      <GetApp />
      <ExploreOptions />
      <Footer />
    </div>
  );
};

export default App;
