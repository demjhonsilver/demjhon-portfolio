import { useEffect } from 'react';

import { motionRack } from 'motionrack'; 








export const About = () => {


    const img1 = '/portfolio/01.jpg';
    const img2= '/portfolio/02.jpg';
    const img3 = '/portfolio/03.jpg';
    const img4 = '/portfolio/mypic.png';


  useEffect(() => {
    motionRack();
  });



  return (
    <div>


    
    
      {/* Services */}
      <div className="content-section  bg-white text-dark  mx-auto text-center" id="about">
       
        


      <section id="scroll">
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5"><img data-motionrack="minSpinLeft"  className="img-fluid rounded-circle" src={img1}  alt="..." /></div>
                    </div>
                    <div className="col-lg-6 order-lg-1" data-motionrack="pump 1.2s">
                        <div className="p-5">
                            <h2 className="display-4">Fullstack  Developer</h2>
                            <p>
                            I&apos;m Demjhon Silver a full-stack developer I have experiences almost 5 years as web developer, I started creating website using PHP and Jquery from scratch without using framework before. Until I studied Ruby on Rails, and Laravel as back-end technology. 
                               
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     
        <section>
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="p-5"><img data-motionrack="slopeUpRight 1.2s" className="img-fluid rounded-circle" src={img2} alt="..." /></div>
                    </div>
                    <div className="col-lg-6" data-motionrack="motionLeft 1.2s">
                        <div className="p-5">
                            <h2 className="display-6">Graphic Designer</h2>
                            <p>I can designed Logo, Business Card, Photo editing, Social Media Posts, Banners , Flyers and etc.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
        <section>
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5"><img data-motionrack="slopeUpLeft 1.2s" className="img-fluid rounded-circle" src={img3} alt="..." /></div>
                    </div>
                    <div className="col-lg-6 order-lg-1" data-motionrack="motionRight 3.2s">
                        <div className="p-5">
                            <h2 className="display-4">Digital Artist</h2>
                            <p>
                            I am passionate about the world of digital art.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>





        <section>
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="p-5"><img data-motionrack="motionRight 1.2s" className="img-fluid rounded" src={img4} alt="..." /></div>
                    </div>
                    <div className="col-lg-6" data-motionrack="motionLeft 4.2s">
                        <div className="p-5">
                            <h2 className="display-6">Demjhon Silver</h2>
                            <p>Welcome!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>














        
      </div>


      









      
    </div>
  );
};
