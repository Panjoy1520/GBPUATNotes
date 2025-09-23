import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeroNav from "../components/Heronav/HeroNav";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoaderSpinner";
import AnimatedFeatureCard from "../components/AnimatedFeatureCard";
import { useInView } from "../hooks/useInView";
import admin_building from "../assets/admin_building.webp";
import Home01 from "../assets/Home01.png";
import Home02 from "../assets/Home02.png";
import Home03 from "../assets/Home03.png";
import "../styles/hero_page.css";

const Heropage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [titleRef, titleInView] = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    // Simulate loading time for now 
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsLoaded(true), 100);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      image: Home01,
      title: "Register & Sort",
      description: "Register in our app and sort all the data by your college. Get personalized access to notes specific to your institution."
    },
    {
      image: Home02,
      title: "Favorite & Save", 
      description: "You can favorite your notes which you like and they will be stored in your personal favorites section for easy access anytime."
    },
    {
      image: Home03,
      title: "Upload & Share",
      description: "Want to upload your notes or PYQs? Just click the upload button and share your notes easily with the community."
    },
  ];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src={admin_building}
          alt="admin_building"
          className={`w-full h-full object-cover transition-all duration-[8000ms] ease-out ${
            isLoaded ? 'scale-110 blur-sm' : 'scale-100 blur-xs'
          }`}
          style={{ filter: 'brightness(0.7) contrast(1.1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>

        <HeroNav />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-20">
          <h1 className={`text-4xl md:text-6xl font-bold text-white max-w-4xl leading-tight mb-6 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            An all-in-one destination for{" "}
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent font-extrabold animate-float">
              storing
            </span>,{" "}
            organizing, and{" "}
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent font-extrabold animate-float" style={{animationDelay: '1s'}}>
              downloading
            </span>{" "}
            Notes
          </h1>
          
          <p className={`text-xl md:text-2xl text-neutral-200 max-w-2xl mb-8 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Join thousands of students in sharing knowledge and academic resources
          </p>

          <button 
            onClick={() => navigate("/home")}
            className={`mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg text-lg font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-500 delay-200 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="flex items-center gap-3">
              Get Started
              <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* features Section */}
      <section className="bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 text-white py-24 px-6 md:px-20 relative overflow-hidden">
        {/* Background mae orange blobs  */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 
            ref={titleRef}
            className={`text-5xl font-bold mb-20 text-center bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent transition-all duration-1000 ${
              titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            How to use?
          </h2>

          <div className="space-y-32">
            {features.map((feature, index) => (
              <AnimatedFeatureCard 
                key={index}
                image={feature.image}
                title={feature.title}
                description={feature.description}
                reverse={index % 2 !== 0}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Heropage;