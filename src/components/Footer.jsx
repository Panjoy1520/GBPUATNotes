import React from 'react';
import Logo from "../assets/GBPUATNotes_logo.png"

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className='h-15 transform -translate-y-5'>
                <img className="h-30 transform -translate-y-5" src={Logo} alt="" />
        
            </div>
            <p className="mt-2 text-gray-400">
              Simplifying access to academic notes, because your grades shouldn't depend on a last-minute search.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="text-gray-400 transition-colors hover:text-orange-500">Home</a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 transition-colors hover:text-orange-500">About Us</a>
              </li>
              <li>
                <a href="/contactus" className="text-gray-400 transition-colors hover:text-orange-500">Contact</a>
              </li>
               <li>
                <a href="/login" className="text-gray-400 transition-colors hover:text-orange-500">Sign In</a>
              </li>
            </ul>
          </div>
 <div>
            <h3 className="text-lg font-semibold text-white">Contribute</h3>
            <ul className="mt-4 space-y-2">
              
              <li>
                <a href="https://github.com/Panjoy1520/GBPUATNotes" className="text-gray-400 transition-colors hover:text-orange-500 flex gap-1.5">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12.019c0 4.448 2.865 8.229 6.737 9.548.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.019C22 6.477 17.523 2 12 2z" clipRule="evenodd"></path></svg>
            Github Repo</a>
              </li>
              
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />

        <div className="flex flex-col items-center justify-between sm:flex-row">
          <p className="text-sm text-gray-500">
            © 2025 GBPUAT Notes. All Rights Reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;