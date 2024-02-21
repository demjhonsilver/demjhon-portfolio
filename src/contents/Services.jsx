import { useEffect } from 'react';

import { motionRack } from 'motionrack'; 

export const Services = () => {


 





  useEffect(() => {
    motionRack();
  });



  return (
    <div>

      {/* Services */}
      <div className="content-section text-white  mx-auto text-center" id="services" style={{backgroundColor : '#191970'}}>
        <div className="container px-4 px-lg-5">
          <div className="content-section-heading">
            <h1 className=" mb-5" data-motionrack-once="motionDown 0.4s">Services</h1>
            <h2 className="text mb-5" data-motionrack-once="motionDown 0.4s" style={{color : 'lightblue'}}>As Fullstack Developer</h2>
          </div>
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0" data-motionrack-once="bounceUp">
              <span className="mx-auto">
              <i className="ri-arrow-left-right-line" style={{ fontSize: '48px', color: 'orange' }}></i>

         
              </span>
              <h4>
                <strong>API</strong>
              </h4>
              <p className="text-faded mb-0">One of the most powerful knowledge skills</p>
            </div>
            <div  className="col-lg-3 col-md-6 mb-5 mb-lg-0" data-motionrack="motionLeft">
              <span className="mx-auto"> 
              <i className="ri-reactjs-line" style={{ fontSize: '48px', color: '#61dbfb' }} ></i>
      
              </span>
        
              
              <h4>
                <strong>Front-End</strong>
              </h4>
              <p className="text-faded mb-0">Technologies like React and Vue will serves as the best</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-md-0" data-motionrack="motionRight">
              <span className="mx-auto">
              <i className="ri-database-2-line" style={{ fontSize: '48px', color: 'yellow' }} ></i>
      
              </span>
              <h4>
                <strong>Back-End</strong>
              </h4>
              <p className="text-faded mb-0">
                Laravel & Node JS - <i className="fas fa-heart"></i>Database  like MySql, Firebase, MongoDB
              </p>
            </div>
            <div className="col-lg-3 col-md-6" data-motionrack-once="bounceUp">
              <span className="mx-auto">
              <i className="ri-pages-line" style={{ fontSize: '48px', color: 'lime' }}></i>

              </span>
              <h4>
                <strong>Designs</strong>
              </h4>
              <p className="text-faded mb-0">E-commerce, Landing page, Social networking, Business and etc.</p>
            </div>
          </div>
        </div>
      </div>

   





      {/* Services */}
      <div className="content-section text-dark  mx-auto text-center" id="services" style={{backgroundColor : '#f3f3f3'}}>
        <div className="container px-4 px-lg-5">
          <div className="content-section-heading">
            <h1 className=" mb-5" data-motionrack-once="motionDown 0.4s">Services</h1>
            <h2 className="text-secondary mb-5" data-motionrack-once="motionDown 0.4s">As Graphic Designer</h2>

          </div>
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0" data-motionrack="bounceDown">
              <span className="mx-auto">
              <i className="ri-gallery-line" style={{ fontSize: '48px', color: '#f4a460' }}></i>

         
              </span>
              <h4>
                <strong>Social Media Posts</strong>
              </h4>
              <p className="text-dark text-faded mb-0">Designing and scheduling graphic materials to your social media accounts. Using Canva, Buffer, Later and etc.</p>
            </div>
            <div  className="col-lg-3 col-md-6 mb-5 mb-lg-0" data-motionrack-once="flare">
              <span className="mx-auto"> 
              <i className="ri-image-fill" style={{ fontSize: '48px', color: 'green' }} ></i>
      
              </span>
        
              
              <h4>
                <strong>Photo Editing</strong>
              </h4>
              <p className="text-dark text-faded mb-0">I can enhance the images and design for the image posts which makes looks better.</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-md-0" data-motionrack-once="flare">
              <span className="mx-auto">
              <i className="ri-shopping-bag-fill" style={{ fontSize: '48px', color: 'blue' }} ></i>
      
              </span>
              <h4>
                <strong>Product Branding</strong>
              </h4>
              <p className="text-dark text-faded mb-0">
                Selling Products - <i className="fas fa-heart"></i>Presented the best way to make more attractive and convincing.
              </p>
            </div>
            <div className="col-lg-3 col-md-6" data-motionrack="bounceDown">
              <span className="mx-auto">
              <i className="ri-store-2-fill" style={{ fontSize: '48px', color: 'red' }}></i>

              </span>
              <h4>
                <strong>Advertise</strong>
              </h4>
              <p className="text-dark text-faded mb-0">You want to promote your product branding, I can help you.</p>
            </div>
          </div>
        </div>
      </div>




















      
    </div>
  );
};
