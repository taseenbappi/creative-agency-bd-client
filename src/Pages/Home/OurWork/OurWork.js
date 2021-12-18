import React from 'react';
import './OurWork.css';

import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper';


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

import slider1 from '../../../images/slider-img/carousel-1.png'
import slider2 from '../../../images/slider-img/carousel-2.png'
import slider3 from '../../../images/slider-img/carousel-3.png'
import slider4 from '../../../images/slider-img/carousel-4.png'
import slider5 from '../../../images/slider-img/carousel-5.png'

const OurWork = () => {
    // install Swiper modules
    SwiperCore.use([EffectCoverflow, Pagination]);
    return (
        <div className="container-fluid py-5 our-work-segment" id="portfolio">
            <h1 className="work-header-txt">Here are some of <span>our works</span> </h1>

            <div className="container mx-auto">
                <Swiper

                    effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                        "rotate": 50,
                        "stretch": 0,
                        "depth": 100,
                        "modifier": 1,
                        "slideShadows": true
                    }} pagination={true} className="mySwiper py-5">
                    <SwiperSlide><img src={slider1} alt="" className='img-fluid' width="500" /></SwiperSlide>
                    <SwiperSlide><img src={slider2} alt="" className='img-fluid' width="500" /></SwiperSlide>
                    <SwiperSlide><img src={slider3} alt="" className='img-fluid' width="500" /></SwiperSlide>
                    <SwiperSlide><img src={slider4} alt="" className='img-fluid' width="500" /></SwiperSlide>
                    <SwiperSlide><img src={slider5} alt="" className='img-fluid' width="500" /></SwiperSlide>



                </Swiper>
            </div>
        </div>
    );
};

export default OurWork;