import { useEffect } from 'react';

import { motionRack } from 'motionrack'; 








export const About = () => {


    const img1 = '/portfolio/01.jpg';
    const img2= '/portfolio/02.jpg';
    const img3 = '/portfolio/03.jpg';



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
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h2 className="display-4">Fullstack  Developer</h2>
                            <p>
                            I&apos;m Demjhon Silver a full-stack developer and Graphic designer, I have experiences almost 5 years as web developer, I started creating website using PHP and Jquery from scratch without using framework before. Until I studied Ruby on Rails, Laravel and Express JS as back-end techs. I built a social networking website before using Laravel & Vue 2 via API json, and then I proceed to React JS and Javascript empire which I discovered a lot of things that makes more productive in both server-side & client side.
                               
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
                    <div className="col-lg-6">
                        <div className="p-5">
                            <h2 className="display-6">Graphic Designer</h2>
                            <p>I&apos;m also social media manager I can manage and schedule your social media posts, I used Softwares like Photoshop, Adobe Illustrator and CorelDraw. In terms of modern graphic platforms I used Canva. I designed Logo, Business Card, Photo editing, Social Media Posts, Banners , Flyers and etc.
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
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h2 className="display-4">Video editor</h2>
                            <p>
                                I work as video editor almost 5 years, I present the video clips more modern high quality and competitive, I used software like Adobe Premiere, Adobe After effects, Sony Vegas, CapCut, Wondershare Filmora and etc.
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
