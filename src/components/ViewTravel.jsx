import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchResultModal from "./SearchResultModal";

const ViewTravel = () => {
    const [data, changeData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

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

    const handleSearch = () => {
        const trimmedValue = searchText.trim();
        if (!trimmedValue) {
            setSelectedRecord(null);
            setModalOpen(false);
            return;
        }

        const match = data.find((item) => String(item.experience_id) === trimmedValue);
        if (match) {
            setSelectedRecord(match);
            setModalOpen(true);
        } else {
            setSelectedRecord(null);
            setModalOpen(false);
            alert("No travel record found for this ID.");
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.post("http://localhost:7500/delete_travel", {
                experience_id: id,
                id,
            });
            changeData((prevData) => prevData.filter((item) => String(item.experience_id) !== String(id)));
        } catch (error) {
            console.log(error);
            alert("Failed to delete travel record.");
        }
    };

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
                        <div className="d-flex gap-2">
                            <input
                                className="search-input"
                                placeholder="Search by Experience ID"
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
                                    <th style={{ width: "90px" }}>Action</th>
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
                                        <td>
                                            <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(value.experience_id)}>
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
                title="Travel Experience Details"
                record={selectedRecord}
            />
        </div>
    );
};

export default ViewTravel;