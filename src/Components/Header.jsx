// 
import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

export default function Head() {
  return (
    <div className="container-fluid p-0" style={{ marginBottom: "90px" }}>
      <Carousel
        showThumbs={false} // Hide thumbnails
        autoPlay
        infiniteLoop
        interval={3000} 
        showStatus={false} // Hide slide count (optional)
        showIndicators={true} // Show dots (optional)
      >
        {/* First Carousel Item */}
        <div>
          <img src="/assets/AP luxury/img/carousel-1.jpg" alt="Luxury Car for Sale" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: "900px" }}>
              <h4 className="text-white text-uppercase mb-md-3">Buy A Car</h4>
              <h1 className="display-1 text-white mb-md-4">Best Cars Sales In Your Location</h1>
              <Link to="#" className="btn btn-primary py-md-3 px-md-5 mt-2">
                Reserve Now
              </Link>
            </div>
          </div>
        </div>

        {/* Second Carousel Item */}
        <div>
          <img src="/assets/AP luxury/img/carousel-2.jpg" alt="Luxury Car for Rent" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: "900px" }}>
              <h4 className="text-white text-uppercase mb-md-3">Drive Your Dream Car</h4>
              <h1 className="display-1 text-white mb-md-4">Own It Today</h1>
              <Link to="#" className="btn btn-primary py-md-3 px-md-5 mt-2">
                Garage
              </Link>
            </div>
          </div>
        </div>

         {/* third carousel item */}

         <div>
          <img src="/assets/AP luxury/aud6.webp" alt="Luxury Car for Rent" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: "900px" }}>
              <h4 className="text-white text-uppercase mb-md-3">Luxury Rides</h4>
              <h1 className="display-1 text-white mb-md-4">Unbeatable Deals</h1>
              <Link to="#" className="btn btn-primary py-md-3 px-md-5 mt-2">
                Garage
              </Link>
            </div>
          </div>
        </div>

        {/* fortk item */}
        <div>
          <img src="/assets/AP luxury/car2.png" alt="Luxury Car for Rent" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: "900px" }}>
              <h4 className="text-white text-uppercase mb-md-3">Ride In Style</h4>
              <h1 className="display-1 text-white mb-md-4">Buy With Confidence</h1>
              <Link to="#" className="btn btn-primary py-md-3 px-md-5 mt-2">
                Garage
              </Link>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
