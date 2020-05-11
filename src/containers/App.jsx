import React from 'react'
import '../assets/styles/App.scss'
import Header from '../components/Header'
import BoxHead from '../components/BoxHead'
import Features from '../components/Features'
import Articles from '../components/Articles'
import Footer from '../components/Footer'

function App() {
  return (
    <div className="App">
        <Header />
        <BoxHead />
        <Features />
        <Articles />
        <Footer />
    </div>
  );
}

export default App;