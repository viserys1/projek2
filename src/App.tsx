import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/sections/Hero';
import { ShoppingCalculator } from './components/ShoppingCalculator';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <ShoppingCalculator />
      </Layout>
    </ThemeProvider>
  );
}

export default App;