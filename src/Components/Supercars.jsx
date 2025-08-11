import React from "react";
import { SuperCarsData } from "../Data/SuperCars";
import { Link } from "react-router-dom";

function Supercars() {
  return (
    <div className="category-page">
      <div className="Back-Button">
        <Link to="/cars">
          <button>Go Back</button>
        </Link>
      </div>
      <h1>Super Cars</h1>
      <p>
        Experience the thrill of speed and performance with our top-tier
        supercars.
      </p>

      <div className="card-grid">
        {SuperCarsData.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.name} />
            <div className="card-details">
              <h3>{car.company}</h3>
              <p>{car.model}</p>
              <p>₹ {car.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Supercars;
