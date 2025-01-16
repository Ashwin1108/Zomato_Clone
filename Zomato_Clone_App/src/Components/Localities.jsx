import React, { useState } from "react";

const Localities = () => {
  const [selectedLocality, setSelectedLocality] = useState(null);
  const localities = [
    { name: "Lower Parel", places: 493 },
    { name: "Powai", places: 443 },
    { name: "Malad West", places: 960 },
    { name: "Borivali West", places: 690 },
    { name: "Bandra Kurla Complex", places: 161 },
    { name: "Vashi", places: 667 },
    { name: "Fort", places: 291 },
    { name: "Juhu", places: 249 },
  ];

  const handleLocalitySelect = (locality) => {
    setSelectedLocality(locality);
  };

  return (
    <section className="py-12">
      <h2 className="text-3xl text-center mb-8">
        Popular localities in and around Mumbai
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-6 px-8">
        {localities.map((locality, index) => (
          <div
            key={index}
            onClick={() => handleLocalitySelect(locality)}
            className={`p-4 border rounded-lg shadow-md cursor-pointer ${
              selectedLocality === locality ? "border-red-600" : ""
            }`}
          >
            <h3 className="text-lg font-semibold">{locality.name}</h3>
            <p className="text-gray-600">{locality.places} places</p>
          </div>
        ))}
        <div className="p-4 border rounded-lg shadow-md cursor-pointer text-center">
          <h3 className="text-red-600 font-semibold">See More</h3>
        </div>
      </div>
    </section>
  );
};

export default Localities;
