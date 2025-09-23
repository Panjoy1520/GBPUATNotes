import React from 'react';
import { useInView } from '../hooks/useInView';

const AnimatedFeatureCard = ({ image, title, description, reverse = false, index }) => {
  const [ref, isInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const cardClasses = `transition-all duration-1000 ease-out transform ${
    isInView 
      ? 'opacity-100 translate-y-0 scale-100' 
      : 'opacity-0 translate-y-16 scale-95'
  }`;
  const flexDirection = reverse ? 'md:flex-row-reverse' : 'md:flex-row';

  const imageClasses = `transition-all duration-500 ease-out transform hover:scale-110 hover:rotate-2 hover:shadow-2xl hover:shadow-orange-500/20 ${
    isInView ? 'animate-bounce-in' : ''
  }`;

  return (
    <div 
      ref={ref} 
      className={`flex flex-col md:items-center gap-12 ${flexDirection} ${cardClasses}`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="md:w-1/2 flex justify-center">
        <img 
          src={image} 
          alt={title} 
          className={`w-64 h-64 object-cover rounded-2xl shadow-2xl shadow-black/30 border-2 border-neutral-700/50 ${imageClasses}`}
        />
      </div>
      <div className="md:w-1/2 space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
            {index + 1}
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-lg text-neutral-300 leading-relaxed max-w-xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AnimatedFeatureCard;
