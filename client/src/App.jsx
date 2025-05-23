import React, { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Navbar from './components/layouts/Navbar';
import WelcomeContent from './components/layouts/WelcomeContent';
import ImageGallery from './components/layouts/ImageGallery';
import Easysteps from './components/layouts/Easysteps';
import TopServices from './components/layouts/TopService';
import CallToAction from './components/layouts/CallToAction';
import Footer from './components/layouts/Footer';
import E1 from './assets/images/E1.JPG';
import E2 from './assets/images/E2.JPG';
import C1 from './assets/images/C1.JPG';
import C2 from './assets/images/C2.JPG';
import M1 from './assets/images/M1.JPG';
import M2 from './assets/images/M2.JPG';
import CA1 from './assets/images/CA1.JPG';
import CA2 from './assets/images/CA2.JPG';
import P1 from './assets/images/P1.JPG';
import P2 from './assets/images/P2.JPG';
import './App.css'

const App = () => {
  const serviceImages = [E1, E2, C1, C2, M1, M2, CA1, CA2, P1, P2]
  useEffect(() => {
     M.AutoInit();
     const elems = document.querySelectorAll(".sidenav");
     M.Sidenav.init(elems);
   }, []);

  return (
    <>
    <div className='home-container'>
   <div className="page-background">
  <div className="nav-content">
    <Navbar />
   </div>
   <div className='row valign-wrapper'>
   <div className='col s12 m6'>
    <WelcomeContent/>
   </div>
   <div className='col s12 m6'>
    <ImageGallery images={serviceImages}/>
   </div>
   </div>
</div>
    <Easysteps/>
    <TopServices />
    <CallToAction />
   
</div>
 <Footer />
   </>
  )
}

export default App
