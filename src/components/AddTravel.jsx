import axios from "axios";
import React, { useState } from "react";

const AddTravel = () => {
    const initialState = {
        experience_id: "",
        destination: "",
        state_country: "",
        travel_date: "",
        budget: "",
        duration: "",
        best_place: "",
        food_recommendation: "",
        rating: "",
        travel_tips: ""
    };

    const [input, setInput] = useState(initialState);
    const [status, setStatus] = useState({ message: "", error: false });

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const readValues = () => {
        axios.post("http://localhost:7500/add_travel", input)
            .then(() => {
                setStatus({ message: "Travel Experience Added Successfully", error: false });
                setInput(initialState);
            })
            .catch((err) => {
                console.log(err);
                setStatus({ message: "Failed to Add Travel Experience", error: true });
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
                                        <i className="bi bi-compass"></i> New Story
                                    </span>
                                    <h2 className="section-title mt-2 mb-0">Add Travel Experience</h2>
                                </div>
                            </div>

                            {status.message && (
                                <div className={`alert-soft ${status.error ? "error" : "success"} mb-4`}>{status.message}</div>
                            )}

                            <div className="row g-4">
                                <div className="form-floating-field col-md-6">
                                    <label>Experience ID</label>
                                    <i className="field-icon bi bi-hash"></i>
                                    <input type="text" className="form-control" name="experience_id" value={input.experience_id} onChange={inputHandler} />
                                </div>

                                <div className="form-floating-field col-md-6">
                                    <label>Destination</label>
                                    <i className="field-icon bi bi-geo-alt"></i>
                                    <input type="text" className="form-control" name="destination" value={input.destination} onChange={inputHandler} />
                                </div>

                                <div className="form-floating-field col-md-6">
                                    <label>State / Country</label>
                                    <i className="field-icon bi bi-globe2"></i>
                                    <input type="text" className="form-control" name="state_country" value={input.state_country} onChange={inputHandler} />
                                </div>

                                <div className="form-floating-field col-md-6">
                                    <label>Travel Date</label>
                                    <i className="field-icon bi bi-calendar2-week"></i>
                                    <input type="text" className="form-control" name="travel_date" value={input.travel_date} onChange={inputHandler} />
                                </div>

                                <div className="form-floating-field col-md-6">
                                    <label>Budget (₹)</label>
                                    <i className="field-icon bi bi-cash-stack"></i>
                                    <input type="text" className="form-control" name="budget" value={input.budget} onChange={inputHandler} />
                                </div>

                                <div className="form-floating-field col-md-6">
                                    <label>Duration</label>
                                    <i className="field-icon bi bi-clock-history"></i>
                                    <input type="text" className="form-control" name="duration" value={input.duration} onChange={inputHandler} />
                                </div>

                                <div className="form-floating-field col-md-6">
                                    <label>Best Place</label>
                                    <i className="field-icon bi bi-star"></i>
                                    <input type="text" className="form-control" name="best_place" value={input.best_place} onChange={inputHandler} />
                                </div>

                                <div className="form-floating-field col-md-6">
                                    <label>Food Recommendation</label>
                                    <i className="field-icon bi bi-cup-hot"></i>
                                    <input type="text" className="form-control" name="food_recommendation" value={input.food_recommendation} onChange={inputHandler} />
                                </div>

                                <div className="form-floating-field col-md-6">
                                    <label>Rating</label>
                                    <i className="field-icon bi bi-award"></i>
                                    <select className="form-select" name="rating" value={input.rating} onChange={inputHandler}>
                                        <option value="">--SELECT--</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>

                                <div className="form-floating-field col-md-6">
                                    <label>Travel Tips</label>
                                    <i className="field-icon bi bi-chat-left-text"></i>
                                    <textarea className="form-control" rows="2" name="travel_tips" value={input.travel_tips} onChange={inputHandler}></textarea>
                                </div>

                                <div className="col-12 text-center mt-2">
                                    <button className="btn btn-gradient px-5" onClick={readValues}>
                                        Add Travel Experience
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTravel;