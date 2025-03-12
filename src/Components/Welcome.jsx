

export default function Section() {
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <h1 className="display-4 text-uppercase text-center mb-5">
                        Welcome To <span className="text-primary">Atta Poku's Mottors</span>
                    </h1>
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <img className="w-75 mb-4" src="/assets/AP Luxury/img/about.png" alt="cars" />
                            <p>
                              
                            Atta Poku Motors is committed to providing 
                            top-quality service, ensuring every customer enjoys a seamless car-buying experience. Our dealership offers a wide range of vehicles, from luxury to economy models, perfect for any need. With 24/7 customer support, we guarantee assistance whenever required, making your purchase process smooth and stress-free. Our convenient system allows for quick and easy transactions, ensuring you drive away with the perfect car. Strategically located in Kumasi, we ensure accessibility, making it easy for customers to find their dream vehicle. Trust Atta Poku Motors for reliability,
                             affordability, and exceptional service every step of the way.  
                            </p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-4 mb-2">
                            <div className="d-flex align-items-center bg-light p-4 mb-4" style={{ height: "150px" }}>
                                <div
                                    className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4"
                                    style={{ width: "100px", height: "100px" }}
                                >
                                    <i className="fa fa-2x fa-headset text-secondary"></i>
                                </div>
                                <h4 className="text-uppercase m-0">24/7 Car Purchase Support</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-2">
                            <div className="d-flex align-items-center bg-secondary p-4 mb-4" style={{ height: "150px" }}>
                                <div
                                    className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4"
                                    style={{ width: "100px", height: "100px" }}
                                >
                                    <i className="fa fa-2x fa-car text-secondary"></i>
                                </div>
                                <h4 className="text-light text-uppercase m-0">Buy A Car Anytime</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-2">
                            <div className="d-flex align-items-center bg-light p-4 mb-4" style={{ height: "150px" }}>
                                <div
                                    className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4"
                                    style={{ width: "100px", height: "100px" }}
                                >
                                    <i className="fa fa-2x fa-map-marker-alt text-secondary"></i>
                                </div>
                                <h4 className="text-uppercase m-0">Multiple Car Dealership Locations</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
