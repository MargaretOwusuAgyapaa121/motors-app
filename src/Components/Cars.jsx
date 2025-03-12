import React, { useEffect, useState } from "react";
import axios from "axios";

const Motors = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  // Function to fetch cars from your backend
  const fetchCars = async () => {
    if (loading) return;

    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/cars?page=${page}&limit=8`
      );
      setCars((prevCars) => [...prevCars, ...response.data.cars]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
        !loading
      ) {
        fetchCars();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="garage-container">
      <h2>Latest Cars</h2>
      <div className="car-grid">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image || "https://via.placeholder.com/200"} alt={car.make} />
            <h3>{car.make} {car.model} ({car.year})</h3>
            <p>💰 Price: ${car.price || "N/A"}</p>
            <p>🚗 Mileage: {car.mileage || "N/A"} miles</p>
            <button className="details-btn">View Details</button>
          </div>
        ))}
      </div>

      {loading && <p className="loading-text">Loading more cars...</p>}
    </div>
  );
};

export default Motors;
