import React from "react";
import { SedanCarsData } from "../Data/SedanCars"; 
import { Link } from "react-router-dom";

function Sedan() {
  return (
    <div className="category-page">
      <div className="Back-Button">
        <Link to="/cars">
          <button>Go Back</button>
        </Link>
      </div>
      <h1>Sedan Cars</h1>
      <p>
        Discover our premium collection of luxury sedans tailored for comfort
        and elegance.
      </p>

      <div className="card-grid">
        {SedanCarsData.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.name} />
            <div className="card-details">
              <h2>{car.company}</h2>
              <p>{car.model}</p>
              <p>₹ {car.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sedan;
