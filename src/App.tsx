import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/sections/Hero';
import { HowItWorks } from './components/sections/HowItWorks';
import { Features } from './components/sections/Features';
import { ShoppingCalculator } from './components/ShoppingCalculator';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <HowItWorks />
        <Features />
        <div id="demo" className="py-20">
          <ShoppingCalculator />
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;