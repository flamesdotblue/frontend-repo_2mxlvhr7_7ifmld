import React from 'react';
import Hero from './components/Hero';
import Story from './components/Story';
import Work from './components/Work';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0b] font-inter">
      <Hero />
      <Story />
      <Work />
      <ContactFooter />
    </div>
  );
}

export default App;
