
import React from "react";
import { Link} from "react-router-dom";
// import "./public/css/style.css"; // Ensure this is correct



export default function Navbar() {
  

  return (
    <>
    <div className="container-fluid bg-dark py-3 px-lg-5 d-none d-lg-block">
    <div className="row">
        <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
                <Link className="text-body pr-3" to=""><i className="fa fa-phone-alt mr-2"></i>+012 345 6789</Link>
                <span className="text-body">|</span>
                <Link className="text-body px-3" to=""><i className="fa fa-envelope mr-2"></i>info@example.com</Link>
            </div>
        </div>
        <div className="col-md-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
                <Link className="text-body px-3" to="">
                    <i className="fab fa-facebook-f"></i>
                </Link>
                <Link className="text-body px-3" to="">
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link className="text-body px-3" to="">
                    <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link className="text-body px-3" to="">
                    <i className="fab fa-instagram"></i>
                </Link>
                <Link className="text-body pl-3" to="">
                    <i className="fab fa-youtube"></i>
                </Link>
            </div>
        </div>
    </div>
</div>
    <div className="container-fluid position-relative nav-bar p-0">
       <div className="position-relative px-lg-5" style={{ zIndex: 9 }}>

            <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
                <Link to="" className="navbar-brand">
                    <h1 className="text-uppercase text-primary mb-1">Atta Poku's Mottors</h1>
                </Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                    <div className="navbar-nav ml-auto py-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        <Link to="/garage" className="nav-item nav-link">Garrage</Link>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Cars</Link>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link to="car.html" className="dropdown-item">Car Listing</Link>
                                <Link to="detail.html" className="dropdown-item">Car Detail</Link>
                                <Link to="booking.html" className="dropdown-item">Car Booking</Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link to="team.html" className="dropdown-item">The Team</Link>
                                <Link to="testimonial.html" className="dropdown-item">Testimonial</Link>
                            </div>
                        </div>
                        <Link to="contact.html" className="nav-item nav-link">Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    </>
  );
}
