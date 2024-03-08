import { Link } from 'react-router-dom';

// swiper
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// images
import saas1 from 'assets/images/hero/migration.gif';
import saas2 from 'assets/images/hero/saas2.jpg';
import saas3 from 'assets/images/hero/saas3.jpg';

const SwiperSlider3 = () => {
    const swiperConfig = {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        autoplay: {
            delay: 15000,
        },
        breakpoints: {
            '576': { slidesPerView: 1.2 },
            '768': { slidesPerView: 1 },
        },
        roundLengths: true,
    };

    return (
        <Swiper >


                    <SwiperSlide key={saas1.toString()}>
                        <div className="swiper-slide-content ">
                            {/* <div className="video-overlay d-flex align-items-center justify-content-center">
                                <Link to="#" className="btn-play success"></Link>
                            </div> */}
                            <img src={saas1} alt="" className="img-fluid rounded-lg" />
                        </div>
                    </SwiperSlide>


        </Swiper>
    );
};

export default SwiperSlider3;
