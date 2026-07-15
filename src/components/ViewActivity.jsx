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
                alert("Error Fetching Data");
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container mt-5">

            <div className="card shadow-lg border-0">

                <div
                    className="card-header text-white"
                    style={{
                        background: "linear-gradient(90deg,#1e3c72,#2a5298)"
                    }}
                >
                    <h3 className="text-center mb-0">
                        Adventure Activity Records
                    </h3>
                </div>

                <div className="card-body">

                    <div className="table-responsive">

                        <table className="table table-bordered table-hover table-striped align-middle">

                            <thead className="table-dark text-center">

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

                                {data.map((value, index) => {
                                    return (
                                        <tr key={value._id}>

                                            <td>{index + 1}</td>

                                            <td>{value.activity_id}</td>

                                            <td>{value.activity_name}</td>

                                            <td>{value.location}</td>

                                            <td>{value.activity_type}</td>

                                            <td>₹ {value.cost}</td>

                                            <td>{value.duration}</td>

                                            <td>
                                                <span className="badge bg-warning text-dark">
                                                    {value.difficulty_level}
                                                </span>
                                            </td>

                                            <td>
                                                <span className="badge bg-success">
                                                    {value.safety_rating}/5
                                                </span>
                                            </td>

                                            <td>{value.best_season}</td>

                                            <td>{value.description}</td>

                                        </tr>
                                    );
                                })}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ViewActivity;