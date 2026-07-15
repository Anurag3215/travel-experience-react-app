import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewHotelvreview = () => {
    const [data, changeData] = useState([]);

    const fetchData = () => {
        axios.post("http://localhost:7500/view_hotel")
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
                                <i className="bi bi-building"></i> Hotel reviews
                            </span>
                            <h2 className="section-title mt-2 mb-0">View Hotel Reviews</h2>
                        </div>
                        <input className="search-input" placeholder="Search hotels" />
                    </div>

                    <div className="table-responsive">
                        <table className="table table-shell align-middle mb-0">
                            <thead>
                                <tr>
                                    <th>Review ID</th>
                                    <th>Hotel Name</th>
                                    <th>Location</th>
                                    <th>Room Type</th>
                                    <th>Price/Night</th>
                                    <th>Star Rating</th>
                                    <th>Amenities</th>
                                    <th>Cleanliness</th>
                                    <th>Overall Rating</th>
                                    <th>Review Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((value, index) => (
                                    <tr key={value._id || index}>
                                        <td><span className="badge-soft">{value.review_id}</span></td>
                                        <td>{value.hotel_name}</td>
                                        <td>{value.location}</td>
                                        <td>{value.room_type}</td>
                                        <td>₹ {value.price_per_night}</td>
                                        <td>{value.star_rating}</td>
                                        <td>{value.amenities}</td>
                                        <td>{value.cleanliness_rating}</td>
                                        <td>{value.overall_rating}</td>
                                        <td>{value.review_comments}</td>
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

export default ViewHotelvreview;