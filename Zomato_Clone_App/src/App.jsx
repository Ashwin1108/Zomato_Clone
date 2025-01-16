import React from "react";

import HeroSection from "./Components/HeroSection";
import Categories from "./Components/Categories";
import Collections from "./Components/Collections";
import Localities from "./Components/Localities";

const App = () => {
  return (
    <div>
      <HeroSection />
      <Categories />
      <Collections />
      <Localities />
    </div>
  );
};

export default App;
