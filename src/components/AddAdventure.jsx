import React, { useState } from "react";
import axios from "axios";

const AddAdventure = () => {
    const initialState = {
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
    };

    const [input, changeInput] = useState(initialState);
    const [status, setStatus] = useState({ message: "", error: false });

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const readValues = () => {
        axios.post("http://localhost:7500/add_adventure", input)
            .then(() => {
                setStatus({ message: "Adventure Activity Added Successfully", error: false });
                changeInput(initialState);
            })
            .catch((error) => {
                console.log(error);
                setStatus({ message: "Error while adding record", error: true });
            });
    };

    return (
        <div className="page-shell">
            <div className="container py-4 py-lg-5">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="glass-card">
                            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
                                <div>
                                    <span className="pill-chip">
                                        <i className="bi bi-tropical-storm"></i> Adventure
                                    </span>
                                    <h2 className="section-title mt-2 mb-0">Add Adventure Activity</h2>
                                </div>
                            </div>

                            {status.message && (
                                <div className={`alert-soft ${status.error ? "error" : "success"} mb-4`}>{status.message}</div>
                            )}

                            <div className="row g-4">
                                <div className="form-floating-field col-md-6">
                                    <label>Activity ID</label>
                                    <i className="field-icon bi bi-hash"></i>
                                    <input type="text" className="form-control" name="activity_id" value={input.activity_id} onChange={inputHandler} />
                                </div>
                                <div className="form-floating-field col-md-6">
                                    <label>Activity Name</label>
                                    <i className="field-icon bi bi-signpost-split"></i>
                                    <input type="text" className="form-control" name="activity_name" value={input.activity_name} onChange={inputHandler} />
                                </div>
                                <div className="form-floating-field col-md-6">
                                    <label>Location</label>
                                    <i className="field-icon bi bi-geo-alt"></i>
                                    <input type="text" className="form-control" name="location" value={input.location} onChange={inputHandler} />
                                </div>
                                <div className="form-floating-field col-md-6">
                                    <label>Activity Type</label>
                                    <i className="field-icon bi bi-bicycle"></i>
                                    <input type="text" className="form-control" name="activity_type" value={input.activity_type} onChange={inputHandler} />
                                </div>
                                <div className="form-floating-field col-md-6">
                                    <label>Cost</label>
                                    <i className="field-icon bi bi-cash-stack"></i>
                                    <input type="text" className="form-control" name="cost" value={input.cost} onChange={inputHandler} />
                                </div>
                                <div className="form-floating-field col-md-6">
                                    <label>Duration</label>
                                    <i className="field-icon bi bi-clock-history"></i>
                                    <input type="text" className="form-control" name="duration" placeholder="e.g. 2 Hours" value={input.duration} onChange={inputHandler} />
                                </div>
                                <div className="form-floating-field col-md-6">
                                    <label>Difficulty Level</label>
                                    <i className="field-icon bi bi-bar-chart-line"></i>
                                    <select className="form-select" name="difficulty_level" value={input.difficulty_level} onChange={inputHandler}>
                                        <option value="">Select</option>
                                        <option>Easy</option>
                                        <option>Medium</option>
                                        <option>Hard</option>
                                    </select>
                                </div>
                                <div className="form-floating-field col-md-6">
                                    <label>Safety Rating</label>
                                    <i className="field-icon bi bi-shield-shaded"></i>
                                    <select className="form-select" name="safety_rating" value={input.safety_rating} onChange={inputHandler}>
                                        <option value="">Select</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="form-floating-field col-md-6">
                                    <label>Best Season</label>
                                    <i className="field-icon bi bi-calendar2-week"></i>
                                    <input type="text" className="form-control" name="best_season" value={input.best_season} onChange={inputHandler} />
                                </div>
                                <div className="form-floating-field col-md-6">
                                    <label>Description</label>
                                    <i className="field-icon bi bi-chat-left-text"></i>
                                    <textarea className="form-control" rows="3" name="description" value={input.description} onChange={inputHandler}></textarea>
                                </div>
                                <div className="col-12 text-center mt-2">
                                    <button className="btn btn-gradient px-5" onClick={readValues}>Submit</button>
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