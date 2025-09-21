import { div } from 'motion/react-client';
import React from 'react';
import HeroNav from '../components/Heronav/HeroNav';
import Footer from '../components/Footer';

const AboutSection = () => {
  return (
  <div>
    <div className="relative w-full bg-gray-900 py-20 md:py-32">
  
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
      >
        <div className="absolute inset-0 z-10 bg-black/70 backdrop-blur-md"></div>
      </div>
    <nav>
        <HeroNav/>
    </nav>
      <div className="relative z-20 mx-auto max-w-4xl px-6 text-center font-sans text-white">
        
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          For Every Student Who's Ever Said, "Does Anyone Have the Notes?"
        </h1>

        <div className="mt-8 space-y-6 text-left text-lg leading-relaxed text-gray-300">
          <p>
            The panic is universal. It’s the night before the sessional exams, and the group chat explodes with the same desperate plea. You’re chasing down blurry photos of a friend's notebook, trying to make sense of incomplete PDFs, and praying that the one person who attended every class finally shares their sacred manuscript. Your entire grade hangs on a fragile thread of unreliable photocopies and last-minute favors.
          </p>

          <p>
            We've lived through that <span className="font-bold text-orange-500">chaos</span>. We survived those near-miss <span className="font-bold text-orange-500">deadlines</span>. And we decided, never again.
          </p>

          <p>
            <strong>GBPUAT Notes</strong> was born from that very frustration. It was created with a single, obsessive mission: to eradicate the last-minute scramble for good. This isn't just another website; it's your academic sanctuary. A centralized, meticulously <span className="font-bold text-orange-500">organized</span> library where every note and every crucial piece of information is waiting for you, exactly when you need it. 
          </p>

          <p>
            No more begging. No more waiting. Just <span className="font-bold text-orange-500">instant</span> access to clear, reliable materials. It’s the peace of mind that comes from knowing the notes are already here, ready to help you succeed.
          </p>
        </div>
        
      </div>
      
    </div>
    <footer>
        <Footer/>
    </footer>
    </div>
  );
};

export default AboutSection;