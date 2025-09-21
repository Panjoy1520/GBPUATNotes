import React from 'react';
import HeroNav from '../components/Heronav/HeroNav';
import { div } from 'motion/react-client';
import Footer from '../components/Footer';
const backgroundImageUrl = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const ContactUs = () => {
  return (
    <div>
    <div className="relative min-h-screen w-full bg-gray-900">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 z-10 bg-black/60 backdrop-blur-md"></div>
      </div>
      <div className="relative z-20 flex min-h-screen flex-col font-sans text-white">
        <header className="container mx-auto flex items-center justify-between p-4 px-6 md:px-12">
          <HeroNav />
        </header>
        <br />
        <br />
        <main className="flex flex-grow flex-col items-center justify-center p-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">Get in Touch</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Have a question, feedback, or a collaboration idea? We'd love to hear from you.
          </p>

          <div className="mt-12 w-full max-w-6xl rounded-lg bg-white/5 p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div className="text-left">
                <h2 className="text-2xl font-bold">Send us a Message</h2>
                <form className="mt-6 space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md border-gray-600 bg-white/10 p-3 text-white shadow-sm transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md border-gray-600 bg-white/10 p-3 text-white shadow-sm transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="mt-1 block w-full rounded-md border-gray-600 bg-white/10 p-3 text-white shadow-sm transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded-md bg-orange-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex flex-col text-left">
                <h2 className="text-2xl font-bold">Connect with the Developers</h2>
                <p className="mt-3 text-gray-300">
                  Follow our journey, contribute to the project, or get in touch with our development team directly through our social channels.
                </p>
                <div className="mt-8 flex flex-grow flex-col justify-center space-y-6">
                  <a href="https://www.linkedin.com/in/pranjay-dwivedi-dev20/" className="group flex items-center gap-4 rounded-lg bg-white/10 p-4 transition hover:bg-white/20">
                    <svg className="h-8 w-8 flex-shrink-0 text-orange-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                    <div>
                      <h3 className="font-semibold transition group-hover:text-white">LinkedIn Pranjay Dwivedi</h3>
                      <p className="text-sm text-gray-400 transition group-hover:text-gray-300">Professional network & updates</p>
                    </div>
                  </a>
                  <a href="www.linkedin.com/in/harikesh-pandey-4658172a3" className="group flex items-center gap-4 rounded-lg bg-white/10 p-4 transition hover:bg-white/20">
                    <svg className="h-8 w-8 flex-shrink-0 text-orange-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                    <div>
                      <h3 className="font-semibold transition group-hover:text-white">LinkedIn Harikesh Pandey</h3>
                      <p className="text-sm text-gray-400 transition group-hover:text-gray-300">Professional network & updates</p>
                    </div>
                  </a>
                  <a href="https://github.com/Panjoy1520/GBPUATNotes" className="group flex items-center gap-4 rounded-lg bg-white/10 p-4 transition hover:bg-white/20">
                    <svg className="h-8 w-8 flex-shrink-0 text-orange-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12.019c0 4.448 2.865 8.229 6.737 9.548.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.019C22 6.477 17.523 2 12 2z" clipRule="evenodd" /></svg>
                    <div>
                      <h3 className="font-semibold transition group-hover:text-white">GitHub</h3>
                      <p className="text-sm text-gray-400 transition group-hover:text-gray-300">Code, issues, and contributions</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <footer>
        <Footer/>
    </footer>
    </div>
  );
};

export default ContactUs;