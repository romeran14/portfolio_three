
'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';


// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




const data = [
  { id: 1, title:"Mammo", img:"/projects_images/mammo.jpg", text: 'Sales of digital mammography machines, installation, service, parts supply, and training', subtext:"This Web was done with the CMS made in php known as Joomla", url:"https://mammo.com/" },
  { id: 2,  title: 'San Diego Criminal Attorney', img:"/projects_images/san_diego.png" , text:"A Criminal Defense Law Firm That Brings Experience and Tenacity to Each Client’s Case.", subtext:"This Web was done with the CMS made in php known as Joomla", url:"https://www.sandiego-criminalattorney.com/"},
  { id: 22,  title: 'Suarez Physical Terapy', img:"/projects_images/suarez.jpg",  url:"https://www.suarezpt.com/", text:"Help and therapeutic assistance center located in Las Vegas.", subtext:"This Web was done with the CMS made in php known as Joomla"},
  { id: 3,  title: 'Fake Twitter' , img:"/projects_images/twitter.jpg", text:"In this imitation of the famous social network",subtext:"This WebApp was done using React.js. The UI was done using SASS, Chakra UI and FramerMotion, moment.js, Axios, Lodash, cloudinary, react-router" , url:"https://faketwitter-front.vercel.app/" },
  { id: 4,  title: 'CriptotApp',img:"/projects_images/cripto.jpg", text:"This app show you the price of cryptos in live-time, also make Graphs about the currency history", subtext:"This WebApp was done using React.js fetching data throught Redux-Query from a RapidApi.", url:"https://cripto-steel.vercel.app/#/" },
  { id: 5,  title: 'MDX Technical Test',img:"/projects_images/mdx.jpg",text:"Technical test to enter in MDX", subtext:"Immersive Page Exercise Using GSAP and Three.js", url:"https://mdx-prueba-tecnica.vercel.app/"},
  { id: 6,  title: 'Teslo Shop', img:"/projects_images/teslo_shop.png", text:"Online store with clothing for the whole family", subtext:"Application built in next.js using Mongo DB, Axios, Material UI, JWT, SWR, and integration with PayPal's payment platform.", url:"https://teslo-shop-roan.vercel.app/" },
  { id: 7,  title: 'Exopalm',img:"/projects_images/exopalm.png", text:"At Exopalm, we take pride in delivering the best and providing eco-responsible, durable roofing products that exceed expectations. ", subtext:"Application in Next.js , gsap, animations, lottie, image-sequence",  url:"https://world-global-production.up.railway.app/" },
  { id: 8,  title: 'Old Portfolio',img:"/projects_images/porfolio.png", text:"Previous portfolio created in 2022 showing some of my early projects", subtext:"", url: "https://portfolio-romeran-14.vercel.app/" },

];

export const Carousel = () => {
  const [slidesPerView, setSlidesPerView] = useState(3.75);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1.25);
      } else {
        setSlidesPerView(3.75);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
   
    
    <div className="content_third_section">
  
            <div  className="container">
           
                    <Swiper
                       initialSlide={2}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={slidesPerView}
                        spaceBetween={0} // Espacio entre slides (puede que no sea suficiente con coverflow)
                        className="swiper_container"
                    >
                        {data.map(item => (
                        <SwiperSlide key={item.id} className="swiper-slide">
                            <div className="slide-content">
                                <img src={item.img} alt="" className='slide-image' />
                                <h5>{item.title }</h5>
                                <div className="text-sl">
                                  <p className='number_card'>  {item.text }</p>
                                  <p className='howwasmade'>{item.subtext}</p>
                                </div>

                            <a href={item.url}>VISIT</a>
                            </div>
                        </SwiperSlide>
                        ))}


                    </Swiper>
                    
            </div>
        
    </div>



  );
}

