import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewActivity = () => {
    const [data, changeData] = useState([]);

    const fetchData = () => {
        axios.post("http://localhost:7500/view_adventure")
            .then((response) => {
                changeData(response.data);
            })
            .catch((error) => {
                console.log(error);
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
                                <i className="bi bi-tropical-storm"></i> Adventure records
                            </span>
                            <h2 className="section-title mt-2 mb-0">Adventure Activity Records</h2>
                        </div>
                        <input className="search-input" placeholder="Search activities" />
                    </div>

                    <div className="table-responsive">
                        <table className="table table-shell align-middle mb-0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Activity ID</th>
                                    <th>Activity Name</th>
                                    <th>Location</th>
                                    <th>Activity Type</th>
                                    <th>Cost</th>
                                    <th>Duration</th>
                                    <th>Difficulty</th>
                                    <th>Safety Rating</th>
                                    <th>Best Season</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((value, index) => (
                                    <tr key={value._id || index}>
                                        <td>{index + 1}</td>
                                        <td><span className="badge-soft">{value.activity_id}</span></td>
                                        <td>{value.activity_name}</td>
                                        <td>{value.location}</td>
                                        <td>{value.activity_type}</td>
                                        <td>₹ {value.cost}</td>
                                        <td>{value.duration}</td>
                                        <td><span className="badge-soft">{value.difficulty_level}</span></td>
                                        <td><span className="badge-soft">{value.safety_rating}/5</span></td>
                                        <td>{value.best_season}</td>
                                        <td>{value.description}</td>
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

export default ViewActivity;