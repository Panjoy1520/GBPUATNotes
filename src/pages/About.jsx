import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView';
import HeroNav from '../components/Heronav/HeroNav';
import Footer from '../components/Footer';
import "../styles/about.css";
const AboutSection = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [para1Ref, para1InView] = useInView({ threshold: 0.5, triggerOnce: true });
  const [para2Ref, para2InView] = useInView({ threshold: 0.5, triggerOnce: true });
  const [para3Ref, para3InView] = useInView({ threshold: 0.5, triggerOnce: true });
  const [para4Ref, para4InView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="relative w-full bg-neutral-900 py-20 md:py-32 parallax-bg"
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
          
          <div className="floating-elements">
            <div className="floating-element w-32 h-32 bg-orange-500 rounded-full blur-3xl top-20 left-10" style={{ animationDelay: '0s' }}></div>
            <div className="floating-element w-48 h-48 bg-orange-600 rounded-full blur-3xl bottom-32 right-20" style={{ animationDelay: '3s' }}></div>
            <div className="floating-element w-24 h-24 bg-orange-400 rounded-full blur-2xl top-1/2 left-1/3" style={{ animationDelay: '6s' }}></div>
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/70 to-black/80 backdrop-blur-sm"></div>
          
          <nav className="relative z-30">
            <HeroNav/>
          </nav>
          
          <div 
            ref={heroRef}
            className="relative z-20 mx-auto max-w-4xl px-6 text-center font-sans text-white"
          >
            {/* animated Headline */}
            <h1 className={`text-4xl font-extrabold tracking-tight md:text-5xl mb-12 ${
              heroInView ? 'animate-scale-in' : 'opacity-0'
            }`}>
              For Every Student Who's Ever Said,{" "}
              <span className="block mt-4 shimmer-text animate-float">
                "Does Anyone Have the Notes?"
              </span>
            </h1>

            {/* content Section - Each paragraph animates on scroll */}
            <div className="mt-8 space-y-6 text-left text-lg leading-relaxed text-gray-300">
              
              {/* paragraph 1 - Animates when scrolled into view */}
              <p 
                ref={para1Ref}
                className={`transition-all duration-500 hover:text-gray-200 ${
                  para1InView ? 'animate-fade-up' : 'opacity-0'
                }`}
              >
                The panic is universal. It's the night before the sessional exams, and the group chat explodes with the same desperate plea. You're chasing down blurry photos of a friend's notebook, trying to make sense of incomplete PDFs, and praying that the one person who attended every class finally shares their sacred manuscript. Your entire grade hangs on a fragile thread of unreliable photocopies and last-minute favors.
              </p>

              {/* pargraph 2 - Slides in from left when in view */}
              <p 
                ref={para2Ref}
                className={`transition-all duration-500 hover:text-gray-200 ${
                  para2InView ? 'animate-slide-left' : 'opacity-0'
                }`}
              >
                We've lived through that{" "}
                <span className="highlight-word font-bold text-orange-500 animate-highlight-glow">
                  chaos
                </span>. We survived those near-miss{" "}
                <span className="highlight-word font-bold text-orange-500 animate-highlight-glow" style={{ animationDelay: '0.5s' }}>
                  deadlines
                </span>. And we decided, never again.
              </p>

              {/*paragraph 3 - Slides in from right when in view */}
              <p 
                ref={para3Ref}
                className={`transition-all duration-500 hover:text-gray-200 ${
                  para3InView ? 'animate-slide-right' : 'opacity-0'
                }`}
              >
                <strong className="shimmer-text text-xl">GBPUAT Notes</strong> was born from that very frustration. It was created with a single, obsessive mission: to eradicate the last-minute scramble for good. This isn't just another website; it's your academic sanctuary. A centralized, meticulously{" "}
                <span className="highlight-word font-bold text-orange-500">
                  organized
                </span>{" "}
                library where every note and every crucial piece of information is waiting for you, exactly when you need it.
              </p>

              {/* pAragraph 4 - Fades up when in view */}
              <p 
                ref={para4Ref}
                className={`transition-all duration-500 hover:text-gray-200 ${
                  para4InView ? 'animate-fade-up' : 'opacity-0'
                }`}
              >
                No more begging. No more waiting. Just{" "}
                <span className="highlight-word font-bold text-orange-500 animate-highlight-glow">
                  instant
                </span>{" "}
                access to clear, reliable materials. It's the peace of mind that comes from knowing the notes are already here, ready to help you succeed.
              </p>

              {/*button - Only appears after last paragraph is in view */}
              <div className={`text-center mt-16 ${
                para4InView ? 'animate-scale-in' : 'opacity-0'
              }`} style={{ animationDelay: '0.5s' }}>
                 <Link to="/home">
                <button className="cursor-pointer group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-4 rounded-2xl text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30">
                  <span>Start Your Journey</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button></Link>
              </div>
            </div>
          </div>
        </div>
        
        <footer>
          <Footer/>
        </footer>
      </div>
    </>
  );
};

export default AboutSection;