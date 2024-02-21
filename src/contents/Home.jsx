import { useEffect } from 'react';
import { motionRack } from 'motionrack'; 

import { About } from './About';
import  { Services } from './Services';
import  { Projects } from './Projects';
import  { Contact } from './Contact';



export const Home = () => {


 

 


  const circ = '/portfolio/circ-mini.png';


  useEffect(() => {
    motionRack();
  });


  return (
    <div>
   

   



   
    <header className="masthead d-flex align-items-center" id="home">
        <div className="container px-4 px-lg-5 text-center mt-5">
        <img className="img-fluid"  data-motionrack-once="expand" src={circ} alt="..." style={{width: '20%'}} />

          <h2 className="mb-1 mt-5" data-motionrack-once="motionDown 0.4s">Fullstack Developer </h2>
          <h4 className="mb-1 mt-4" data-motionrack-once="motionDown 0.4s">Graphic designer / Digital Artist</h4>

         
          <a className="btn btn-primary btn-xl mt-4"  data-motionrack="flipRight" href="#about">
            Find Out More
          </a>

        </div>
      </header>






  





    <About />
    <Services />
    <Projects />


    <Contact />

    </div>
  )
}
