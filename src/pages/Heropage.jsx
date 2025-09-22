import React from "react";
import admin_building from "../assets/admin_building.webp";
import Home01 from "../assets/Home01.png";
import Home02 from "../assets/Home02.png";
import Home03 from "../assets/Home03.png";
import HeroNav from "../components/Heronav/HeroNav";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Heropage() {

  const navigate = useNavigate();



  return (
    <div>
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src={admin_building}
          alt="admin_building"
          className="w-full h-full object-cover blur-xs"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <HeroNav />

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-3xl md:text-5xl font-semibold text-white max-w-2xl leading-snug">
            An all-in-one destination for{" "}
            <span className="text-orange-400 font-bold">storing</span>,{" "}
            organizing, and{" "}
            <span className="text-orange-400 font-bold">downloading</span> Notes
          </h1>
          <button 
          onClick={()=>navigate("/home")}
          className="mt-6 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg text-lg font-medium text-white shadow-lg">
            Get Started
          </button>
        </div>
      </div>
      {/* How to use Section */}
      <section className="bg-neutral-900 text-white py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          How to use?
        </h2>

        <div className="space-y-12">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={Home01}
              alt="step 1"
              className="w-48 h-48 object-cover rounded-lg shadow-lg"
            />
            <p className="text-lg max-w-xl">
              Register in our app and sort all the data by your college
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={Home02}
              alt="step 2"
              className="w-48 h-48 object-cover rounded-lg shadow-lg"
            />
            <p className="text-lg max-w-xl">
              You can favorite your notes which you like and they will be stored
              in your personal favorites section
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={Home03}
              alt="step 3"
              className="w-48 h-48 object-cover rounded-lg shadow-lg"
            />
            <p className="text-lg max-w-xl">
              Want to upload your notes or PYQs? Just click the upload button
              and share your notes easily
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer >
        <Footer/>
      </footer>
    </div>
  );
}

export default Heropage;
