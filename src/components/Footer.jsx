import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/GBPUATNotes_logo.png";
import "../styles/footer.css"
const Footer = () => {
  const GithubIcon = () => (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12.019c0 4.448 2.865 8.229 6.737 9.548.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.019C22 6.477 17.523 2 12 2z" clipRule="evenodd" />
    </svg>
  );

  return (
    <>
      <footer className="w-full bg-neutral-900 text-neutral-300 border-t border-neutral-800">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            
            {/* logo Section */}
            <div className="md:col-span-1">
              <div className="logo-container transform -translate-y-2">
                <img 
                  className="h-28 w-auto transform -translate-y-2 filter drop-shadow-lg" 
                  src={Logo} 
                  alt="GBPUAT Notes Logo" 
                />
              </div>
              <p className="text-neutral-400 leading-relaxed">
                Simplifying access to academic notes, because your grades shouldn't depend on a last-minute search.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-neutral-500">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Trusted by students</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="footer-link text-neutral-400 hover:text-orange-400 transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="footer-link text-neutral-400 hover:text-orange-400 transition-colors duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contactus" className="footer-link text-neutral-400 hover:text-orange-400 transition-colors duration-300">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="footer-link text-neutral-400 hover:text-orange-400 transition-colors duration-300">
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contribute Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Contribute
              </h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://github.com/Panjoy1520/GBPUATNotes" 
                    className="github-link text-neutral-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="transform group-hover:rotate-12 transition-transform duration-300">
                      <GithubIcon />
                    </span>
                    <span>Github Repo</span>
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="divider-glow my-8 border-t border-neutral-800"></div>
          <div className="flex flex-col items-center justify-between sm:flex-row gap-4">
            <p className="text-sm text-neutral-500 transition-colors duration-300 hover:text-neutral-400">
              © {new Date().getFullYear()} GBPUAT Notes. All Rights Reserved.
            </p>
            
            {/* back to top button */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2 px-4 py-2 text-sm text-neutral-500 hover:text-orange-400 transition-all duration-300 hover:bg-neutral-800/50 rounded-lg border border-transparent hover:border-neutral-700"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <svg className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;