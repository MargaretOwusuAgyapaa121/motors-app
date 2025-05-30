// export default Garage;
import React, { useState } from "react";

const cars = [
  {
    id: 1,
    image: "/assets/AP luxury/cars/lambo-1.jpg",
    Modal: "BUGATTI CHIRON",
    description: "Luxury meets power.",
    details: {
      images: [
        "/assets/AP luxury/cars/lambo-1.jpg",
        "/assets/AP luxury/cars/lambo2.jpg",
        "/assets/AP luxury/cars/lambo3.jpg",
        "/assets/AP luxury/cars/lambo4.jpg",
      ],
      specs: {
        Engine: "8.0L W16",
        TopSpeed: "261 mph",
        Price: "$3 million",
      },
    },
  },

  {
    id: 6,
    image: "/assets/AP luxury/cars/2015-lexus-rx350-1.webp",
    Modal: "Lexus",
    description: "Refined for the road.",
    details: {
      images: [
        "/assets/AP luxury/cars/2015-lexus-rx350-3.webp",
        "/assets/AP luxury/cars/2015-lexus-rx350-1.webp",
        "/assets/AP luxury/cars/2015-lexus-rx350-4.webp",
        "assets/AP luxury/cars/2015-lexus-rx350-5.webp",
      ],
      specs: {
        Engine: "6.5L V12",
        TopSpeed: "211 mph",
        Price: "$400,000",
      },
    },
  },
  {
    id: 2,
    image: "/assets/AP luxury/cars/dodge-Ib1.jpg",
    Modal: "Dodge",
    description: "Refined for the road.",
    details: {
      images: [
        "/assets/AP luxury/cars/dodge-Ib1.jpg",
        "/assets/AP luxury/cars/dodge-Ib2.jpg",
        "/assets/AP luxury/cars/2015-lexus-rx350-4.webp",
        "assets/AP luxury/cars/2015-lexus-rx350-5.webp",
      ],
      specs: {
        Engine: "6.5L V12",
        TopSpeed: "211 mph",
        Price: "$400,000",
      },
    },
  },

  {
    id: 6,
    image: "/assets/AP luxury/cars/2015-lexus-rx350-1.webp",
    Modal: "Lexus", 
    description: "Refined for the road.",
    details: {
      images: ["/assets/AP luxury/cars/2015-lexus-rx350-3.webp",
        "/assets/AP luxury/cars/2015-lexus-rx350-1.webp",
        "/assets/AP luxury/cars/2015-lexus-rx350-4.webp",
        "assets/AP luxury/cars/2015-lexus-rx350-5.webp"
      ],
      specs: {
        Engine: "6.5L V12",
        TopSpeed: "211 mph",
        Price: "$400,000",
      },
    },
  },
  {
    id: 6,
    image: "/assets/AP luxury/cars/2015-lexus-rx350-1.webp",
    Modal: "Lexus", 
    description: "Refined for the road.",
    details: {
      images: ["/assets/AP luxury/cars/2015-lexus-rx350-3.webp",
        "/assets/AP luxury/cars/2015-lexus-rx350-1.webp",
        "/assets/AP luxury/cars/2015-lexus-rx350-4.webp",
        "assets/AP luxury/cars/2015-lexus-rx350-5.webp"
      ],
      specs: {
        Engine: "6.5L V12",
        TopSpeed: "211 mph",
        Price: "$400,000",
      },
    },
  },
  {
    id: 6,
    image: "/assets/AP luxury/cars/2015-lexus-rx350-1.webp",
    Modal: "Lexus", 
    description: "Refined for the road.",
    details: {
      images: ["/assets/AP luxury/cars/2015-lexus-rx350-3.webp",
        "/assets/AP luxury/cars/2015-lexus-rx350-1.webp",
        "/assets/AP luxury/cars/2015-lexus-rx350-4.webp",
        "assets/AP luxury/cars/2015-lexus-rx350-5.webp"
      ],
      specs: {
        Engine: "6.5L V12",
        TopSpeed: "211 mph",
        Price: "$400,000",
      },
    },
  },
  {
    id: 6,
    image: "/assets/AP luxury/cars/2015-lexus-rx350-1.webp",
    Modal: "Lexus", 
    description: "Refined for the road.",
    details: {
      images: ["/assets/AP luxury/cars/2015-lexus-rx350-3.webp",
        "/assets/AP luxury/cars/2015-lexus-rx350-1.webp",
        "/assets/AP luxury/cars/2015-lexus-rx350-4.webp",
        "assets/AP luxury/cars/2015-lexus-rx350-5.webp"
      ],
      specs: {
        Engine: "6.5L V12",
        TopSpeed: "211 mph",
        Price: "$400,000",
      },
    },
  },
  {
    id: 6,
    image: "/assets/AP luxury/cars/2015-lexus-rx350-1.webp",
    Modal: "Lexus", 
    description: "Refined for the road.",
    details: {
      images: ["/assets/AP luxury/cars/2015-lexus-rx350-3.webp",
        "/assets/AP luxury/cars/2015-lexus-rx350-1.webp",
        "/assets/AP luxury/cars/2015-lexus-rx350-4.webp",
        "assets/AP luxury/cars/2015-lexus-rx350-5.webp"
      ],
      specs: {
        Engine: "6.5L V12",
        TopSpeed: "211 mph",
        Price: "$400,000",
      },
    },
  },
  {
    id: 6,
    image: "/assets/AP luxury/cars/2015-lexus-rx350-1.webp",
    Modal: "Lexus", 
    description: "Refined for the road.",
    details: {
      images: ["/assets/AP luxury/cars/2015-lexus-rx350-3.webp",
        "/assets/AP luxury/cars/2015-lexus-rx350-1.webp",
        "/assets/AP luxury/cars/2015-lexus-rx350-4.webp",
        "assets/AP luxury/cars/2015-lexus-rx350-5.webp"
      ],
      specs: {
        Engine: "6.5L V12",
        TopSpeed: "211 mph",
        Price: "$400,000",
      },
    },
  },
  {
    id: 6,
    image: "/assets/AP luxury/cars/2015-lexus-rx350-1.webp",
    Modal: "Lexus", 
    description: "Refined for the road.",
    details: {
      images: ["/assets/AP luxury/cars/2015-lexus-rx350-3.webp",
        "/assets/AP luxury/cars/2015-lexus-rx350-1.webp",
        "/assets/AP luxury/cars/2015-lexus-rx350-4.webp",
        "assets/AP luxury/cars/2015-lexus-rx350-5.webp"
      ],
      specs: {
        Engine: "6.5L V12",
        TopSpeed: "211 mph",
        Price: "$400,000",
      },
    },
  },
  {
    id: 6,
    image: "/assets/AP luxury/cars/2015-lexus-rx350-1.webp",
    Modal: "Lexus", 
    description: "Refined for the road.",
    details: {
      images: ["/assets/AP luxury/cars/2015-lexus-rx350-3.webp",
        "/assets/AP luxury/cars/2015-lexus-rx350-1.webp",
        "/assets/AP luxury/cars/2015-lexus-rx350-4.webp",
        "assets/AP luxury/cars/2015-lexus-rx350-5.webp"
      ],
      specs: {
        Engine: "6.5L V12",
        TopSpeed: "211 mph",
        Price: "$400,000",
      },
    },
  },
  {
    id: 6,
    image: "/assets/AP luxury/cars/2015-lexus-rx350-1.webp",
    Modal: "Lexus", 
    description: "Refined for the road.",
    details: {
      images: ["/assets/AP luxury/cars/2015-lexus-rx350-3.webp",
        "/assets/AP luxury/cars/2015-lexus-rx350-1.webp",
        "/assets/AP luxury/cars/2015-lexus-rx350-4.webp",
        "assets/AP luxury/cars/2015-lexus-rx350-5.webp"
      ],
      specs: {
        Engine: "6.5L V12",
        TopSpeed: "211 mph",
        Price: "$400,000",
      },
    },
  },
  {
    id: 6,
    image: "/assets/AP luxury/cars/2015-lexus-rx350-1.webp",
    Modal: "Lexus", 
    description: "Refined for the road.",
    details: {
      images: ["/assets/AP luxury/cars/2015-lexus-rx350-3.webp",
        "/assets/AP luxury/cars/2015-lexus-rx350-1.webp",
        "/assets/AP luxury/cars/2015-lexus-rx350-4.webp",
        "assets/AP luxury/cars/2015-lexus-rx350-5.webp"
      ],
      specs: {
        Engine: "6.5L V12",
        TopSpeed: "211 mph",
        Price: "$400,000",
      },
    },
  },
  {
    id: 6,
    image: "/assets/AP luxury/cars/2015-lexus-rx350-1.webp",
    Modal: "Lexus", 
    description: "Refined for the road.",
    details: {
      images: ["/assets/AP luxury/cars/2015-lexus-rx350-3.webp",
        "/assets/AP luxury/cars/2015-lexus-rx350-1.webp",
        "/assets/AP luxury/cars/2015-lexus-rx350-4.webp",
        "assets/AP luxury/cars/2015-lexus-rx350-5.webp"
      ],
      specs: {
        Engine: "6.5L V12",
        TopSpeed: "211 mph",
        Price: "$400,000",
      },
    },
  },
  {
    id: 6,
    image: "/assets/AP luxury/cars/2015-lexus-rx350-1.webp",
    Modal: "Lexus", 
    description: "Refined for the road.",
    details: {
      images: ["/assets/AP luxury/cars/2015-lexus-rx350-3.webp",
        "/assets/AP luxury/cars/2015-lexus-rx350-1.webp",
        "/assets/AP luxury/cars/2015-lexus-rx350-4.webp",
        "assets/AP luxury/cars/2015-lexus-rx350-5.webp"
      ],
      specs: {
        Engine: "6.5L V12",
        TopSpeed: "211 mph",
        Price: "$400,000",
      },
    },
  },
  
  // ... Add similar details to other cars as needed
];

const Garage = () => {
  const [fullscreenCar, setFullscreenCar] = useState(null);
  const [savedCars, setSavedCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCardClick = (car) => {
    if (fullscreenCar?.id === car.id) {
      setFullscreenCar(null);
    } else {
      setFullscreenCar(car);
    }
  };

  const handleSave = (e, carId) => {
    e.stopPropagation();
    if (!savedCars.includes(carId)) {
      setSavedCars([...savedCars, carId]);
    }
  };

  const handleViewDetails = (e, car) => {
    e.stopPropagation();
    setSelectedCar(car);
  };

  return (
    <>
      <div className="garage-header" >
        <img
          src="/assets/AP luxury/img/car-rent-1.png"
          alt="img"
          style={{ width: "100%", height: "160%", objectFit: "cover" }}
        />
        <div className="trans">
          <h1 className="display-3 text-uppercase mb-3" id="text">
            explore our garage
          </h1>
        </div>
      </div>

      <div>
        <h1
          className="display-4 text-uppercase text-center mb-5"
          style={{ margin: "240px" }}
        >
          Welcome To <span className="text-primary">our garage</span>
        </h1>
      </div>

      <div className="garage-container">
        {fullscreenCar ? (
          <div
            className="fullscreen-card"
            onClick={() => setFullscreenCar(null)}
          >
            <img src={fullscreenCar.image} alt="Car" />
            <p>{fullscreenCar.description}</p>
          </div>
        ) : (
          <div className="card-grid">
            {cars.map((car) => (
              <div
                key={car.id}
                className="car-card"
                onClick={() => handleCardClick(car)}
              >
                <img src={car.image} alt={`Car ${car.id}`} />
                <p>{car.description}</p>
                <div className="button-group">
                  <button
                    onClick={(e) => handleSave(e, car.id)}
                    disabled={savedCars.includes(car.id)}
                    style={{
                      backgroundColor: savedCars.includes(car.id)
                        ? "gray"
                        : "#007bff",
                      color: "white",
                      border: "none",
                      padding: "6px 10px",
                      borderRadius: "5px",
                      cursor: savedCars.includes(car.id)
                        ? "not-allowed"
                        : "pointer",
                      marginRight: "8px",
                    }}
                  >
                    {savedCars.includes(car.id) ? "Saved" : "Save"}
                  </button>
                  <button
                    onClick={(e) => handleViewDetails(e, car)}
                    style={{
                      backgroundColor: "#28a745",
                      color: "white",
                      border: "none",
                      padding: "6px 10px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Car Details Modal */}
      {selectedCar && (
        <div
          className="car-detail-modal"
          onClick={() => setSelectedCar(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            className="car-detail-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              maxWidth: "800px",
              width: "90%",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <h2>{selectedCar.Modal}</h2>
            <p>{selectedCar.description}</p>
            {selectedCar.details?.specs && (
              <ul>
                {Object.entries(selectedCar.details.specs).map(
                  ([key, value]) => (
                    <li key={key}>
                      <strong>{key}:</strong> {value}
                    </li>
                  )
                )}
              </ul>
            )}
            <div
              className="detail-images"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              {(selectedCar.details?.images || []).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${selectedCar.Modal} detail ${i + 1}`}
                  style={{
                    maxWidth: "200px",
                    margin: "10px",
                    borderRadius: "8px",
                  }}
                />
              ))}
            </div>
            <button
              onClick={() => setSelectedCar(null)}
              style={{
                marginTop: "20px",
                padding: "8px 16px",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Garage;
