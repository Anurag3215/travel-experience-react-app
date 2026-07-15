import React, { useState } from "react";
import axios from "axios";

const AddAdventure = () => {

    const [input, changeInput] = useState({
        activity_id: "",
        activity_name: "",
        location: "",
        activity_type: "",
        cost: "",
        duration: "",
        difficulty_level: "",
        safety_rating: "",
        best_season: "",
        description: ""
    });

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const readValues = () => {
        console.log(input);

        axios.post("http://localhost:7500/add_adventure", input)
            .then((response) => {
                alert("Adventure Activity Added Successfully");
                console.log(response.data);
            })
            .catch((error) => {
                alert("Error while adding record");
                console.log(error);
            });
    };

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col col-12 col-sm-10 col-md-8 col-lg-7 mx-auto">

                        <div className="card shadow">
                            <div className="card-header bg-primary text-white text-center">
                                <h3>Add Adventure Activity</h3>
                            </div>

                            <div className="card-body">

                                <div className="row g-3">

                                    <div className="col-md-6">
                                        <label className="form-label">Activity ID</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="activity_id"
                                            value={input.activity_id}
                                            onChange={inputHandler}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Activity Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="activity_name"
                                            value={input.activity_name}
                                            onChange={inputHandler}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Location</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="location"
                                            value={input.location}
                                            onChange={inputHandler}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Activity Type</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="activity_type"
                                            value={input.activity_type}
                                            onChange={inputHandler}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Cost</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cost"
                                            value={input.cost}
                                            onChange={inputHandler}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Duration</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="duration"
                                            placeholder="e.g. 2 Hours"
                                            value={input.duration}
                                            onChange={inputHandler}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Difficulty Level</label>
                                        <select
                                            className="form-select"
                                            name="difficulty_level"
                                            value={input.difficulty_level}
                                            onChange={inputHandler}
                                        >
                                            <option value="">Select</option>
                                            <option>Easy</option>
                                            <option>Medium</option>
                                            <option>Hard</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Safety Rating</label>
                                        <select
                                            className="form-select"
                                            name="safety_rating"
                                            value={input.safety_rating}
                                            onChange={inputHandler}
                                        >
                                            <option value="">Select</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Best Season</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="best_season"
                                            value={input.best_season}
                                            onChange={inputHandler}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Description</label>
                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            name="description"
                                            value={input.description}
                                            onChange={inputHandler}
                                        ></textarea>
                                    </div>

                                    <div className="col-12 text-center">
                                        <button
                                            className="btn btn-success px-5"
                                            onClick={readValues}
                                        >
                                            Submit
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAdventure;