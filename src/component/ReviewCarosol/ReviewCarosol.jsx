import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../ReviewCarosol/reviewCarosol.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


// import img
import img1 from '../../assets/avetar1.jpg'
import img2 from '../../assets/avater2.jpg'
import img3 from '../../assets/avater3.jpg'
import img4 from '../../assets/avater4.jpg'


const ReviewCarosol = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper w-2/3"
            >
                <SwiperSlide>
                    {/* <div className='w-auto'>
                        <img className='w-2/3' src={img1} alt="" />
                    </div> */}
                    <div className='p-5'>
                        <p className='mb-3'>Ad quando abhorreant eos. Vel eu aeque gloriatur deterruisset, mei fabulas corpora eu, paulo labore ei vis. Altera eloquentiam ei qui. Ea cetero interesset nec, numquam perfecto sententiae nec cu. Est reprimique efficiantur id, est ei iisque atomorum consetetur, nec elaboraret deterruisset et. Mei forensibus repudiandae ad, vitae commodo ut sea.</p>
                        <p className='text-xl font-bold text-orange-400'>Julia Wild</p>
                        <p className='text-sm mt-2'>Luli co.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <div className='w-auto '>
                        <img className='w-2/3' src={img2} alt="" />
                    </div> */}
                    <div>
                        <p className='mb-3'>"Dina is a special restaurant debet vulputate ei eum. Sit prompta dolorem hendrerit at. Vis et error albucius posidonium, eros dolor suavitate in mei, per essent facilisi ex. Graece numquam theophrastus an mei. Est adhuc percipit prodesset an. Ea agam paulo feugait mel."
                            <br />
                        </p>

                        <p className='text-xl font-bold text-orange-400'>Jerry Griffin</p>
                        <p className='text-sm mt-2'>Griff Inc</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <div className='w-auto'>
                        <img className='w-2/3' src={img3} alt="" />
                    </div> */}
                    <div>
                        <p className='mb-3'>"Cum accusam expetendis cu, dolor dicam sadipscing eum an. Ei his eros populo, ne putent iuvaret detracto pri, per aeque viderer ut. Vix ea primis probatus, pro eu verear sententiae. Ne case congue qui, splendide hendrerit mel te, omnesque delicatissimi ad mea. At omnis quando electram nam, ne prompta adversarium."</p>

                        <p className='text-xl font-bold text-orange-400'>Robert White</p>
                        <p className='text-sm mt-2'>Food 24/7</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <div>
                        <img className='' src={img4} alt="" />
                    </div> */}
                    <div>
                        <p className='mb-3'>"Dina is a special restaurant debet vulputate ei eum. Sit prompta dolorem hendrerit at. Vis et error albucius posidonium, eros dolor suavitate in mei, per essent facilisi ex. Graece numquam theophrastus an mei. Est adhuc percipit prodesset an. Ea agam paulo feugait mel."
                        </p>

                        <p className='text-xl font-bold text-orange-400'> Jerry Griffin</p>
                        <p className='text-sm mt-2'> Griff Inc</p>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <p>"Cum accusam expetendis cu, dolor dicam sadipscing eum an. Ei his eros populo, ne putent iuvaret detracto pri, per aeque viderer ut. Vix ea primis probatus, pro eu verear sententiae. Ne case congue qui, splendide hendrerit mel te, omnesque delicatissimi ad mea. At omnis quando electram nam, ne prompta adversarium."
                        <br />
                        Robert White
                        <br />
                        Food 24/7</p>
                </SwiperSlide> */}
                {/* <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </>

    );
};

export default ReviewCarosol;