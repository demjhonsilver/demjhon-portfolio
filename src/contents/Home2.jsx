import { useEffect } from 'react';

import { motionRack } from 'motionrack'; 

export const Home = () => {


 

 
  const portfolio1 = '/portfolio/portfolio-1.jpg';
  const portfolio2 = '/portfolio/portfolio-2.jpg';
  const portfolio3 = '/portfolio/portfolio-3.jpg';
  const portfolio4 = '/portfolio/portfolio-4.jpg';

  const circ = '/portfolio/circ-mini.png';


  useEffect(() => {
    motionRack();
  });



  return (
    <div>
    
      <header className="masthead d-flex align-items-center">
        <div className="container px-4 px-lg-5 text-center">
        <img className="img-fluid"  data-motionrack-once="expand" src={circ} alt="..." style={{width: '20%'}} />

          <h2 className="mb-1 mt-5" data-motionrack-once="motionDown 0.4s">Full Stack Dev | API Expert | Designer</h2>
          <h4 className="mb-5 mt-3">
            <p data-motionrack="fadeIn">Demjhon Silver</p>
          </h4>
          <a className="btn btn-primary btn-xl"  data-motionrack="flipRight" href="">
            Find Out More
          </a>
        </div>
      </header>







      {/* Services */}
      <div className="content-section bg-dark text-white  mx-auto text-center">
        <div className="container px-4 px-lg-5">
          <div className="content-section-heading">
            <h3 className="text-secondary mb-0" data-motionrack-once="motionDown 0.4s">Services</h3>
            <h2 className="mb-5" data-motionrack-once="motionDown 0.4s">What I can Serve</h2>
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
                Laravel & Node JS - <i className="fas fa-heart"></i>Database  like MySql, Firebase, MongoDB, Supabase
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

      {/* Callout */}
      <div className="callout  mx-auto">
        <div className="container px-4 px-lg-5 text-center">
          <h2 className="mx-auto mb-5">
           
          </h2>
          <a  data-motionrack="flipRight" className="btn btn-primary btn-xl" href="">
            Power
          </a>
        </div>
      </div>

      {/* Portfolio */}
      <div className="content-section  mx-auto" id="portfolio">
        <div className="container px-4 px-lg-5">
          <div className="content-section-heading text-center">
            <h3 className="text-secondary mb-0">Portfolio</h3>
            <h2 className="mb-5">Recent Projects</h2>
          </div>
          <div className="row gx-0">
            <div className="col-lg-6">
              <a className="portfolio-item" href="#!">
                <div className="caption">
                  <div className="caption-content">
                    <div className="h2">E-Commerce</div>
                    <p className="mb-0">An online clothing store with majestic API client services with Admin System</p>
                  </div>
                </div>
                <img data-motionrack-once="slopeUpLeft" className="img-fluid" src={portfolio1} alt="..." />
              </a>
            </div>
            <div className="col-lg-6">
              <a className="portfolio-item" href="#!">
                <div className="caption">
                  <div className="caption-content">
                    <div className="h2">Social Networking</div>
                    <p className="mb-0">I created my own social networking site live purchased domain and server, before, with comments, friends, like, upload images, hashstags and strong API</p>
                  </div>
                </div>
                <img data-motionrack-once="slopeUpRight" className="img-fluid" src={portfolio2} alt="..." />
              </a>
            </div>
            <div className="col-lg-6">
              <a className="portfolio-item" href="#!">
                <div className="caption">
                  <div className="caption-content">
                    <div className="h2">Online Dictionary</div>
                    <p className="mb-0">This site is simple but powerful toolkit using API set-up auto loading no need to refresh.</p>
                  </div>
                </div>
                <img data-motionrack-once="slopeDownLeft" className="img-fluid" src={portfolio3} alt="..." />
              </a>
            </div>
            <div className="col-lg-6">
              <a className="portfolio-item" href="#!">
                <div className="caption">
                  <div className="caption-content">
                    <div className="h2">Coffee Shop Page</div>
                    <p className="mb-0">A simple coffee shop webpage for business platform.</p>
                  </div>
                </div>
                <img data-motionrack-once="slopeDownRight" className="img-fluid" src={portfolio4} alt="..." />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="content-section bg-primary text-white  mx-auto">
        <div className="container px-4 px-lg-5 text-center">
          <h2 className="mb-4">I created my own javascript libraries with MIT License for FREE</h2>
          <a className="btn btn-xl btn-light me-4" href="#!">
            Creativity is the key
          </a>
          <a className="btn btn-xl btn-dark" href="#!">
            Competition makes more productive
          </a>
        </div>
      </div>
    </div>
  );
};
