//
import { Modal } from "bootstrap";
import React, { useState } from "react";

const cars = [
  {
    id: 1,
    image: "/assets/AP luxury/bugatti chiron.webp",
    Modal:"BUGATTI CHIRON",
    description: "Luxury meets power.",
  },
  {
    id: 2,
    image: "/assets/AP luxury/mercedes-benz c-class.jpg",
    Modal:"MERCEDES-BENZ C-CLASS",
    description: "Drive into the future.",
  },
  {
    id: 3,
    image: "/assets/AP luxury/Audi RS7.jpg",
    Modal:"AUDI RS7",
    description: "Bold and beautiful.",
  },
  {
    id: 4,
    image: "/assets/AP luxury/aud6.webp",
    Modal:"AUD6",
    description: "Performance in every curve.",
  },
  {
    id: 5,
    image: "/assets/AP luxury/dodge.jpg",
    Modal:"DODGE",
    description: "Elegance on four wheels.",
  },
  {
    id: 6,
    image: "/assets/AP luxury/ferrari.avif",
    Mdal:"FERRARI",
    description: "Refined for the road.",
  },
  {
    id: 7,
    image: "/assets/AP luxury/ford.jpg",
    Modal:"FORD",
    description: "Feel the luxury.",
  },
  {
    id: 8,
    image: "/assets/AP luxury/jaguar.jpg",
    Modal:"JAGUAR",
    description: "Turn heads anywhere.",
  },
  {
    id: 9,
    image: "/assets/AP luxury/aston martin.jpg",
    Modal:"ASTON MARTIN",
    description: "Crafted to thrill.",
  },
  {
    id: 10,
    image: "/assets/AP luxury/chevrolet corvette.jpg",
    Modal:"CORVETTE",
    description: "Unleash the beast.",
  },
  {
    id: 11,
    image: "/assets/AP luxury/nissan.jpg",
    Modal:"NISSAN",
    description: "Luxury reimagined.",
  },
  {
    id: 12,
    image: "/assets/AP luxury/porshe.webp",
    Modal:"PORSHE",
    description: "Your dream ride.",
  },
  {
    id: 13,
    image: "/assets/AP luxury/car13.jpg",
    description: "Precision in motion.",
  },
  {
    id: 14,
    image: "/assets/AP luxury/car14.jpg",
    description: "Styled for greatness.",
  },
  {
    id: 15,
    image: "/assets/AP luxury/car15.jpg",
    description: "Own the moment.",
  },
];

const Garage = () => {
  const [fullscreenCar, setFullscreenCar] = useState(null);
  const [savedCars, setSavedCars] = useState([]);

  const handleCardClick = (car) => {
    if (fullscreenCar?.id === car.id) {
      setFullscreenCar(null); // Exit fullscreen
    } else {
      setFullscreenCar(car); // Enter fullscreen
    }
  };

  const handleSave = (e, carId) => {
    e.stopPropagation(); // Prevent fullscreen on button click
    if (!savedCars.includes(carId)) {
      setSavedCars([...savedCars, carId]);
    }
  };

  const handleViewDetails = (e) => {
    e.stopPropagation(); // Prevent fullscreen on button click
    alert("View details coming soon!");
  };

  return (
    <>
      <div className="garage-header">
        <img
          src="/assets/AP luxury/img/car-rent-1.png"
          alt="img"
          style={{
            width: "100%",
            height: "160%",
            objectFit: "cover",
          }}
        />

        
        <div className="trans">
        <h1 className="display-3 text-uppercase mb-3" id="text">
          explore our garage{" "}
        </h1>
        </div>
        
      </div>

      <div>
      <h1 className="display-4 text-uppercase text-center mb-5" style={{margin:"240px"}}>
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
                    onClick={(e) => handleViewDetails(e)}
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
    </>
  );
};

export default Garage;
