import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const img2 = "/AP Luxury/img2.jpg";
const teamImages = [img2, img2];

export default function TeamSection() {
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <h1 className="display-4 text-uppercase text-center mb-5">Meet Our Team</h1>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {teamImages.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="team-item text-center">
                                <img className="img-fluid w-100" src={img} alt={`Team Member ${index + 1}`} />
                                <div className="position-relative py-4">
                                    <h4 className="text-uppercase">Full Name</h4>
                                    <p className="m-0">Designation</p>
                                    <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                                        <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
