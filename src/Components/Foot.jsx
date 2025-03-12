import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <div className="container-fluid bg-secondary py-5 px-sm-3 px-md-5" style={{ marginTop: "90px" }}>
                <div className="row pt-5">
                    {/* Contact Section */}
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h4 className="text-uppercase text-light mb-4">Get In Touch</h4>
                        <p className="mb-2"><i className="fa fa-map-marker-alt text-white mr-3"></i>123 Street, New York, USA</p>
                        <p className="mb-2"><i className="fa fa-phone-alt text-white mr-3"></i>+012 345 67890</p>
                        <p><i className="fa fa-envelope text-white mr-3"></i>info@example.com</p>
                        <h6 className="text-uppercase text-white py-2">Follow Us</h6>
                        <div className="d-flex justify-content-start">
                            <a className="btn btn-lg btn-dark btn-lg-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-lg btn-dark btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-lg btn-dark btn-lg-square" href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h4 className="text-uppercase text-light mb-4">Useful Links</h4>
                        <div className="d-flex flex-column justify-content-start">
                            <Link className="text-body mb-2" to="#"><i className="fa fa-angle-right text-white mr-2"></i>Private Policy</Link>
                            <Link className="text-body mb-2" to="#"><i className="fa fa-angle-right text-white mr-2"></i>Terms & Conditions</Link>
                            <Link className="text-body mb-2" to="#"><i className="fa fa-angle-right text-white mr-2"></i>New Member Registration</Link>
                            <Link className="text-body mb-2" to="#"><i className="fa fa-angle-right text-white mr-2"></i>Affiliate Program</Link>
                            <Link className="text-body" to="#"><i className="fa fa-angle-right text-white mr-2"></i>Help & FAQs</Link>
                        </div>
                    </div>

                    {/* Car Gallery */}
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h4 className="text-uppercase text-light mb-4">Garrage</h4>
                        <div className="row mx-n1">
                            {[1, 2, 3, 4, 5, 6].map((num) => (
                                <div className="col-4 px-1 mb-2" key={num}>
                                    <a href="#"><img className="w-100" src={`img/gallery-${num}.jpg`} alt={`Gallery Image ${num}`} /></a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h4 className="text-uppercase text-light mb-4">Newsletter</h4>
                        <p className="mb-4">Subscribe to our newsletter for the latest updates.</p>
                        <div className="w-100 mb-3">
                            <div className="input-group">
                                <input type="text" className="form-control bg-dark border-dark" style={{ padding: "25px" }} placeholder="Your Email" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary text-uppercase px-3">Sign Up</button>
                                </div>
                            </div>
                        </div>
                        <i>Stay updated with our latest news and offers.</i>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="container-fluid bg-dark py-4 px-sm-3 px-md-5">
                <p className="mb-2 text-center text-body">&copy; <a href="#">Atta Poku's Mottors</a>. All Rights Reserved.</p>
                
            </div>

            {/* Back to Top Button */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="fa fa-angle-double-up"></i></a>
        </>
    );
}
