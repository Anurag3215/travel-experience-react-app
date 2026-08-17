import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchResultModal from "./SearchResultModal";

const ViewActivity = () => {
    const [data, changeData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

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

    const handleSearch = () => {
        const trimmedValue = searchText.trim();
        if (!trimmedValue) {
            setSelectedRecord(null);
            setModalOpen(false);
            return;
        }

        const match = data.find((item) => String(item.activity_id) === trimmedValue);
        if (match) {
            setSelectedRecord(match);
            setModalOpen(true);
        } else {
            setSelectedRecord(null);
            setModalOpen(false);
            alert("No adventure record found for this ID.");
        }
    };

    const handleDelete = async (record) => {
        try {
            await axios.post("http://localhost:7500/delete_adventure", {
                id: record.activity_id,
            });
            changeData((prevData) => prevData.filter((item) => String(item._id) !== String(record._id)));
        } catch (error) {
            console.log(error);
            alert("Failed to delete adventure record.");
        }
    };

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
                        <div className="d-flex gap-2">
                            <input
                                className="search-input"
                                placeholder="Search by Activity ID"
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
                                    <th style={{ width: "90px" }}>Action</th>
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
                                        <td>
                                            <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(value)}>
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
                title="Adventure Activity Details"
                record={selectedRecord}
            />
        </div>
    );
};

export default ViewActivity;