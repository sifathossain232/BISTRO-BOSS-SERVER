import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import slider1 from '../../../assets/home/slide1.jpg';
import slider2 from '../../../assets/home/slide2.jpg';
import slider3 from '../../../assets/home/slide3.jpg';
import slider4 from '../../../assets/home/slide4.jpg';
import slider5 from '../../../assets/home/slide5.jpg';
import SectionTitel from '../../../Components/SectionTitel/SectionTitel';

const Category = () => {
    return (
        <section>
            <SectionTitel
                subHeading={"From 11.00am to 10.00pm"}
                heading={"Order Online"}
            ></SectionTitel>
            <Swiper
                // slidesPerView={4}
                spaceBetween={67}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}

                breakpoints={{
                    768:{
                        slidesPerView:2
                    },
                    1024:{
                        slidesPerView:4
                    }
                }}
                modules={[Pagination]}
                className="mySwiper mb-16"
            >
                <SwiperSlide>
                    <img className='' src={slider1} alt="" />
                    <h3 className='text-xl uppercase text-center relative -top-10 text-white'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h3 className='text-xl uppercase text-center relative -top-10 text-white'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h3 className='text-xl uppercase text-center relative -top-10 text-white'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h3 className='text-xl uppercase text-center relative -top-10 text-white'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h3 className='text-xl uppercase text-center relative -top-10 text-white'>Salads</h3>
                </SwiperSlide>
            </Swiper>

        </section>
    );
};

export default Category;