

export const Projects = () => {

    const portfolio1 = '/portfolio/portfolio-1.jpg';
    const portfolio2 = '/portfolio/portfolio-2.jpg';
    const portfolio3 = '/portfolio/portfolio-3.jpg';
    const portfolio4 = '/portfolio/portfolio-4.jpg';
    const portfolioIntro1= '/portfolio/intro1.jpg';
    const portfolioIntro2= '/portfolio/intro2.jpg';
    const portfolioIntro3= '/portfolio/intro3.jpg';
    const portfolioIntro4= '/portfolio/art1.jpg';
    const portfolioIntro5= '/portfolio/art2.jpg';

    return (
      <div  id="projects">
    
   
    <section className="page-section clearfix">

        
            <div className="container">


            <div className="content-section-heading text-center mt-5">
           
           <h2 className="mb-2">Projects</h2>
           <h3 className="text-secondary mb-5">Graphics Design</h3>
         </div>



    <div className="row justify-content-center" data-motionrack="bounceDown">
                <div className="col-4">
                    <a href=""  rel="noopener noreferrer">
                    <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src={portfolioIntro1} alt="..." />
                </a>
                </div>


                <div className="col-4">
                <a href=""  rel="noopener noreferrer">
                    <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src={portfolioIntro3} alt="..." />
                </a>
                </div>


                <div className="col-4">
                <a href=""  rel="noopener noreferrer">
                    <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src={portfolioIntro2} alt="..." />
                </a>
                </div>

     
                <div className="">
                <br></br>
                 <br></br>
                <a href=""  rel="noopener noreferrer">
                    <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src={portfolioIntro4} alt="..." />
                </a>
                </div>


                <div className="">
                <br></br>
                 <br></br>
                <a href=""  rel="noopener noreferrer">
                    <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src={portfolioIntro5} alt="..." />
                </a>
                </div>



  </div>



  <br></br>



<br></br>
  <div className="row justify-content-center mt-5" data-motionrack="flare">




  </div>









            </div>
        </section>

      <section className="contact d-flex align-items-center py-1">




   














      {/* Portfolio */}
      <div className="content-section  mx-auto" id="portfolio">
        <div className="container px-4 px-lg-5">
          <div className="content-section-heading text-center">
           
            <h2 className="mb-2">Projects</h2>
            <h3 className="text-secondary mb-5">Web Development</h3>
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









      </section> 
  
      </div>
    )
  }
  