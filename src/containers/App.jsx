import React, { useState } from 'react'
import '../assets/styles/App.scss'
import Header from '../components/Header'
import ModalMenu from '../components/ModalMenu'
import Features from '../components/Features'
import Articles from '../components/Articles'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

function App() {
  const [showModal, setStateModal] = useState(false)
  const handleShowModal = () => setStateModal(!showModal)

  return (
    <div className="App">
        <Header 
          showModal={showModal} 
          handleShowModal={handleShowModal}
        />
        <ModalMenu showModal={showModal}/>
        <Hero />
        <Features />
        <Articles />
        <Footer />
    </div>
  );
}

export default App;