import React from "react";
import { SuvCarsData } from "../Data/SuvCars";
import { Link } from "react-router-dom";

function SUV() {
  return (
    <div className="category-page">
      <div className="Back-Button">
        <Link to="/cars">
          <button>Go Back</button>
        </Link>
      </div>
      <h1>SUV Cars</h1>
      <p>
        Explore our versatile and powerful SUVs designed for every terrain and
        lifestyle.
      </p>

      <div className="card-grid">
        {SuvCarsData.map((car) => (
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

export default SUV;
