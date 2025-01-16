import React, { useState } from "react";

const Collections = () => {
  const [showDetails, setShowDetails] = useState(null);
  const collections = [
    {
      title: "Top Trending Spots",
      places: 33,
      image:
        "https://th.bing.com/th/id/OIP.xtSVbTDe7L9_z_KGwmEAXgHaE8?rs=1&pid=ImgDetMain",
    },
    {
      title: "Best Insta-worthy Places",
      places: 28,
      image:
        "https://th.bing.com/th/id/OIP.ImLtDs8aRNlZKebx9ypoMwHaDt?rs=1&pid=ImgDetMain",
    },
    {
      title: "Newly Opened Places",
      places: 29,
      image:
        "https://i.pinimg.com/originals/bd/cb/0d/bdcb0d865339e2917e9b56afe3cf78f9.jpg",
    },
    {
      title: "Strawberry Sweet Treats",
      places: 10,
      image:
        "https://www.cookingclassy.com/wp-content/uploads/2016/04/strawberry_shortcake_trifles2..jpg",
    },
  ];

  const handleDetailsToggle = (index) => {
    setShowDetails((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-3xl text-center mb-8">Collections</h2>
      <p className="text-center text-gray-600 mb-8">
        Explore curated lists of top restaurants, cafes, pubs, and bars in
        Mumbai, based on trends
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
        {collections.map((item, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-end p-4">
              <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-300">{item.places} Places</p>
              <button
                onClick={() => handleDetailsToggle(index)}
                className="mt-2 text-red-600"
              >
                {showDetails === index ? "Hide Details" : "Show Details"}
              </button>
              {showDetails === index && (
                <p className="mt-2 text-gray-300">
                  More details about the collection...
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
