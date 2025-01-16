import React, { useState } from "react";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const items = [
    {
      title: "Order Online",
      image:
        "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_1200,h_630,d_uk:cuisines:chinese-3.jpg/v1/uk/restaurants/114123.jpg",
    },
    {
      title: "Dining Out",
      image:
        "https://th.bing.com/th/id/OIP.xcs8S1veM-0rtGBb_VkvtgAAAA?rs=1&pid=ImgDetMain",
    },
    {
      title: "Live Event",
      image:
        "https://th.bing.com/th/id/OIP.Tlya27DREG_SuYxgdhllYgHaE8?rs=1&pid=ImgDetMain",
    },
  ];

  const handleCategoryClick = (index) => {
    setActiveCategory(index);
  };

  return (
    <section className="py-12">
      <h2 className="text-3xl text-center mb-8">Popular Categories</h2>
      <div className="flex justify-center gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className={`w-64 h-64 bg-cover bg-center rounded-lg shadow-md ${
              activeCategory === index ? "border-4 border-red-600" : ""
            }`}
            style={{ backgroundImage: `url(${item.image})` }}
            onClick={() => handleCategoryClick(index)}
          >
            <div className="bg-black bg-opacity-10 h-full flex items-center justify-center rounded-lg">
              <h3 className="text-white text-xl font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
