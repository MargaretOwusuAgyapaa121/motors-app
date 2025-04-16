import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

export default function About() {
    return (
        <>
            

            {/* Banner Section */}
            <h1 className="display-4 text-uppercase text-center mb-5">
                        Welcome To <span className="text-primary">Atta Poku's Mottors</span>
                    </h1>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row mx-0">
                        <div className="col-lg-6 px-0">
                            <div className="px-5 bg-secondary d-flex align-items-center justify-content-between" style={{ height: "350px" }}>
                                <img className="img-fluid flex-shrink-0 ml-n5 w-50 mr-4" src="assets/AP Luxury/img/banner-left.png" alt="" />
                                <div className="text-right">
                                    <h3 className="text-uppercase text-light mb-3">Want to be a driver?</h3>
                                    <p className="mb-4">Let make it happen!</p>
                                    <Link className="btn btn-primary py-2 px-4" to="/garage">Explore our Garage</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 px-0">
                            <div className="px-5 bg-dark d-flex align-items-center justify-content-between" style={{ height: "350px" }}>
                                <div className="text-left">
                                    <h3 className="text-uppercase text-light mb-3">Looking for a car?</h3>
                                    <p className="mb-4">Find the one that fits your style!</p>
                                    <Link className="btn btn-primary py-2 px-4" to="/contact">contact Us</Link>
                                </div>
                                <img className="img-fluid flex-shrink-0 mr-n5 w-50 ml-4" src="assets/AP Luxury/img/banner-right.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vendor Section - Swiper Carousel */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={2}
                        navigation
                        autoplay={{ delay: 2500 }}
                        breakpoints={{
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 6 },
                        }}
                    >
                        {Array.from({ length: 8 }).map((_, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-light p-4">
                                    <img src={`assets/AP Luxury/img/vendor-${index + 1}.png`} alt={`Vendor ${index + 1}`} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}
