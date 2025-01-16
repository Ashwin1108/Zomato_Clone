import React from "react";
import googlePlay from "../assets/GooglePlay.jpg";
import appStore from "../assets/AppStore.png";
import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f8f8f8", padding: "40px 0" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {/* About Zomato */}
        <div>
          <h4>ABOUT ZOMATO</h4>
          <ul>
            <li>Who We Are</li>
            <li>Blog</li>
            <li>Work With Us</li>
            <li>Investor Relations</li>
            <li>Report Fraud</li>
            <li>Press Kit</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Zomaverse */}
        <div>
          <h4>ZOMAVERSE</h4>
          <ul>
            <li>Zomato</li>
            <li>Blinkit</li>
            <li>District</li>
            <li>Feeding India</li>
            <li>Hyperpure</li>
            <li>Zomato Live</li>
            <li>Zomaland</li>
            <li>Weather Union</li>
          </ul>
        </div>

        {/* For Restaurants */}
        <div>
          <h4>FOR RESTAURANTS</h4>
          <ul>
            <li>Partner With Us</li>
            <li>Apps For You</li>
          </ul>
        </div>

        {/* Learn More */}
        <div>
          <h4>LEARN MORE</h4>
          <ul>
            <li>Privacy</li>
            <li>Security</li>
            <li>Terms</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4>SOCIAL LINKS</h4>
          <div style={{ display: "flex", gap: "10px" }}>
            <FaLinkedinIn size={24} />
            <FaInstagram size={24} />
            <IoMdClose size={24} />
            <FaYoutube size={24} />
            <FaFacebookF size={24} />
          </div>

          {/* App Download Buttons */}
          <div style={{ marginTop: "20px" }}>
            <img src={appStore} alt="App Store" width="150" />
            <img
              src={googlePlay}
              alt="Google Play"
              width="150"
              style={{ marginTop: "10px" }}
            />
          </div>
        </div>
      </div>

      <hr style={{ margin: "40px 0" }} />

      <p style={{ textAlign: "center" }}>
        By continuing past this page, you agree to our Terms of Service, Cookie
        Policy, Privacy Policy, and Content Policies. All trademarks are
        properties of their respective owners. 2008-2025 © Zomato™ Ltd. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
