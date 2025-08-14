
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';


// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




const data = [
  { id: 1, title:"Mammo", text: 'Dedication', number:"1.0" },
  { id: 2,  title: 'San Diego Criminal Attorney', number:"2.0" , url:"https://www.sandiego-criminalattorney.com/"},
  { id: 2,  title: 'Suarez Physical Terapy', number:"2.0" },
  { id: 3,  title: 'Fake Twitter', number:"3.0" },
  { id: 4,  title: 'CriptotApp', number:"4.0" },
  { id: 5,  title: 'MDX Technical Test' , number:"1.0"},
  { id: 6,  title: 'Teslo Shop' , number:"2.0"},
  { id: 7,  title: 'PokeTamagochi', number:"3.0" },
  { id: 8,  title: 'Old Portfolio', number:"4.0" },

];

export const Carousel = () => {
  // Use a single ref for both the observer and GSAP



  return (
   
    
    <div className="content_third_section">
  
            <div  className="container">
           
                    <Swiper
                       initialSlide={2}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={3} // Mostramos 5 slides
                        //spaceBetween={30} // Espacio entre slides (puede que no sea suficiente con coverflow)
                        
                        coverflowEffect={{
                            depth:100,
                            slideShadows:true,
                            stretch:"5%",
                            rotate:-50
                        }}
                        modules={[ EffectCoverflow  ]}
                        className="swiper_container"
                    >
                        {data.map(item => (
                        <SwiperSlide key={item.id} className="swiper-slide">
                            <div className="slide-content">

                                <p className='number_card'>  {item.number }</p>
                       
                                <p>{item.text}</p>
                            
                            </div>
                        </SwiperSlide>
                        ))}


                    </Swiper>
                    
            </div>
        
    </div>



  );
}

