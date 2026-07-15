import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">
          🌍 Travel Experience Sharing Platform
        </h1>
        <p className="text-muted">
          Share your travel memories, hotel reviews, and adventure experiences.
        </p>
      </div>

      <div className="row g-4">

        {/* Travel Experience */}
        <div className="col-md-4">
          <div className="card shadow-lg border-0 h-100">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              className="card-img-top"
              alt="Travel"
              style={{ height: "220px", objectFit: "cover" }}
            />

            <div className="card-body text-center">
              <h4 className="card-title">✈️ Travel Experience</h4>

              <p className="card-text">
                Share your destination, budget, attractions,
                transportation and travel tips.
              </p>

              <Link to="/addtravel" className="btn btn-primary me-2">
                Add
              </Link>

              <Link to="/viewtravel" className="btn btn-outline-primary">
                View
              </Link>
            </div>
          </div>
        </div>

        {/* Hotel Review */}
        <div className="col-md-4">
          <div className="card shadow-lg border-0 h-100">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
              className="card-img-top"
              alt="Hotel"
              style={{ height: "220px", objectFit: "cover" }}
            />

            <div className="card-body text-center">
              <h4 className="card-title">🏨 Hotel Review</h4>

              <p className="card-text">
                Review hotels by sharing pricing,
                cleanliness, amenities and overall experience.
              </p>

              <Link to="/addhotel" className="btn btn-success me-2">
                Add
              </Link>

              <Link to="/viewhotel" className="btn btn-outline-success">
                View
              </Link>
            </div>
          </div>
        </div>

        {/* Adventure */}
        <div className="col-md-4">
          <div className="card shadow-lg border-0 h-100">
            <img
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60"
              className="card-img-top"
              alt="Adventure"
              style={{ height: "220px", objectFit: "cover" }}
            />

            <div className="card-body text-center">
              <h4 className="card-title">🏕️ Adventure Activity</h4>

              <p className="card-text">
                Share exciting adventures like trekking,
                rafting, camping, scuba diving and more.
              </p>

              <Link to="/addactivity" className="btn btn-warning me-2">
                Add
              </Link>

              <Link to="/viewactivity" className="btn btn-outline-warning">
                View
              </Link>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default HomePage;