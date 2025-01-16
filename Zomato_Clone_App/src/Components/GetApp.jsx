import React, { useState } from "react";
import getApp from "../assets/GetApp.jpg";
import googlePlay from "../assets/GooglePlay.jpg";
import appStore from "../assets/AppStore.png";
const GetApp = () => {
  const [selectedOption, setSelectedOption] = useState("Email");
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#FFFCF5] px-4 md:px-16">
      {/* Left Side */}
      <div className="mb-8 md:mb-0 md:mr-16">
        <img src={getApp} alt="Mobile Screens" className="w-72 md:w-96" />
      </div>

      {/* Right Side*/}
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Get the Zomato app
        </h1>
        <p className="text-gray-600 mb-6">
          We will send you a link, open it on your phone to download the app
        </p>

        {/* Switch Buttons */}
        <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              value="Email"
              checked={selectedOption === "Email"}
              onChange={() => setSelectedOption("Email")}
              className="accent-red-500"
            />
            <span>Email</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              value="Phone"
              checked={selectedOption === "Phone"}
              onChange={() => setSelectedOption("Phone")}
              className="accent-red-500"
            />
            <span>Phone</span>
          </label>
        </div>

        {/* Input and Button */}
        <div className="flex items-center mb-6">
          <input
            type={selectedOption === "Email" ? "email" : "tel"}
            placeholder={selectedOption === "Email" ? "Email" : "Phone"}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-64 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button className="px-4 py-2 bg-red-500 text-white rounded-r-md hover:bg-red-600">
            Share App Link
          </button>
        </div>

        {/* Download Buttons */}
        <p className="text-gray-600 mb-2">Download app from</p>
        <div className="flex items-center space-x-4">
          <img
            src={googlePlay}
            alt="Google Play"
            className="w-32 cursor-pointer"
          />
          <img src={appStore} alt="App Store" className="w-32 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default GetApp;
