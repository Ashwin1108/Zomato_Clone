import React from "react";

const ExploreOptions = () => {
  const options = [
    "Popular Cuisines Near Me",
    "Popular Restaurant Types Near Me",
    "Top Restaurant Chains",
    "Cities We Deliver To",
  ];

  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">
        Explore Options Near Me
      </h2>
      <div className="grid grid-cols-4 md:grid-cols-1 gap-6 px-8">
        {options.map((option, index) => (
          <div
            key={index}
            className="px-6 py-4 bg-white rounded-lg shadow-md cursor-pointer"
          >
            <p className="text-gray-800 font-semibold">{option}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreOptions;
