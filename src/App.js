import React from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <div className='container'> 
        <Header />
        <Tabs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
