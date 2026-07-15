import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewTravel = () => {
    const [data, changeData] = useState([]);

    const fetchData = () => {
        axios.post("http://localhost:7500/view_travel")
            .then((response) => {
                changeData(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="page-shell">
            <div className="container py-4 py-lg-5">
                <div className="glass-card">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
                        <div>
                            <span className="pill-chip">
                                <i className="bi bi-airplane-engines"></i> Travel records
                            </span>
                            <h2 className="section-title mt-2 mb-0">View Travel Experiences</h2>
                        </div>
                        <input className="search-input" placeholder="Search destinations" />
                    </div>

                    <div className="table-responsive">
                        <table className="table table-shell align-middle mb-0">
                            <thead>
                                <tr>
                                    <th>Experience ID</th>
                                    <th>Destination</th>
                                    <th>State / Country</th>
                                    <th>Travel Date</th>
                                    <th>Budget (₹)</th>
                                    <th>Duration</th>
                                    <th>Best Place</th>
                                    <th>Food Recommendation</th>
                                    <th>Rating</th>
                                    <th>Travel Tips</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((value, index) => (
                                    <tr key={value._id || index}>
                                        <td><span className="badge-soft">{value.experience_id}</span></td>
                                        <td>{value.destination}</td>
                                        <td>{value.state_country}</td>
                                        <td>{value.travel_date}</td>
                                        <td>{value.budget}</td>
                                        <td>{value.duration}</td>
                                        <td>{value.best_place}</td>
                                        <td>{value.food_recommendation}</td>
                                        <td>{value.rating}</td>
                                        <td>{value.travel_tips}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewTravel;