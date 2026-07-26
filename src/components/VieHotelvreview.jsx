import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchResultModal from "./SearchResultModal";

const ViewHotelvreview = () => {
    const [data, changeData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

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

    const handleSearch = () => {
        const trimmedValue = searchText.trim();
        if (!trimmedValue) {
            setSelectedRecord(null);
            setModalOpen(false);
            return;
        }

        const match = data.find((item) => String(item.review_id) === trimmedValue);
        if (match) {
            setSelectedRecord(match);
            setModalOpen(true);
        } else {
            setSelectedRecord(null);
            setModalOpen(false);
            alert("No hotel review record found for this ID.");
        }
    };

    const handleDelete = (id) => {
        changeData((prevData) => prevData.filter((item) => String(item.review_id) !== String(id)));
    };

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
                        <div className="d-flex gap-2">
                            <input
                                className="search-input"
                                placeholder="Search by Review ID"
                                value={searchText}
                                onChange={(event) => setSearchText(event.target.value)}
                                onKeyDown={(event) => event.key === "Enter" && handleSearch()}
                            />
                            <button className="btn-gradient" type="button" onClick={handleSearch}>
                                Search
                            </button>
                        </div>
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
                                    <th style={{ width: "90px" }}>Action</th>
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
                                        <td>
                                            <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(value.review_id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <SearchResultModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                title="Hotel Review Details"
                record={selectedRecord}
            />
        </div>
    );
};

export default ViewHotelvreview;