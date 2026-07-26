import axios from "axios";
import React, { useState } from "react";

const AddHotelreview = () => {
    const initialState = {
        review_id: "",
        hotel_name: "",
        location: "",
        room_type: "",
        price_per_night: "",
        star_rating: "",
        amenities: "",
        cleanliness_rating: "",
        overall_rating: "",
        review_comments: ""
    };

    const [input, changeInput] = useState(initialState);
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const submitData = () => {
        axios.post("http://localhost:7500/add_hotel", input)
            .then(() => {
                setError(false);
                setMessage("Hotel Review Added Successfully");
                changeInput(initialState);
            })
            .catch((err) => {
                setError(true);
                if (err.response && err.response.data.message) {
                    setMessage(err.response.data.message);
                } else {
                    setMessage("Something went wrong");
                }
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
                                        <i className="bi bi-building"></i> Stay review
                                    </span>
                                    <h2 className="section-title mt-2 mb-0">Add Hotel Review</h2>
                                </div>
                            </div>

                            {message && (
                                <div className={`alert-soft ${error ? "error" : "success"} mb-4`}>{message}</div>
                            )}

                            <div className="row g-4">
                                <div className="form-floating-field col-md-6">
                                    <label>Review ID</label>
                                    <i className="field-icon bi bi-hash"></i>
                                    <input type="text" className="form-control" name="review_id" value={input.review_id} onChange={inputHandler} />
                                </div>
                                <div className="form-floating-field col-md-6">
                                    <label>Hotel Name</label>
                                    <i className="field-icon bi bi-building"></i>
                                    <input type="text" className="form-control" name="hotel_name" value={input.hotel_name} onChange={inputHandler} />
                                </div>
                                <div className="form-floating-field col-md-6">
                                    <label>Location</label>
                                    <i className="field-icon bi bi-geo-alt"></i>
                                    <input type="text" className="form-control" name="location" value={input.location} onChange={inputHandler} />
                                </div>
                                <div className="form-floating-field col-md-6">
                                    <label>Room Type</label>
                                    <i className="field-icon bi bi-door-open"></i>
                                    <select className="form-select" name="room_type" value={input.room_type} onChange={inputHandler}>
                                        <option value="">Select</option>
                                        <option>Standard</option>
                                        <option>Deluxe</option>
                                        <option>Executive</option>
                                        <option>Suite</option>
                                    </select>
                                </div>
                                <div className="form-floating-field col-md-6">
                                    <label>Price Per Night</label>
                                    <i className="field-icon bi bi-cash-stack"></i>
                                    <input type="number" className="form-control" name="price_per_night" value={input.price_per_night} onChange={inputHandler} />
                                </div>
                                <div className="form-floating-field col-md-6">
                                    <label>Star Rating</label>
                                    <i className="field-icon bi bi-star"></i>
                                    <select className="form-select" name="star_rating" value={input.star_rating} onChange={inputHandler}>
                                        <option value="">Select</option>
                                        <option>1 Star</option>
                                        <option>2 Star</option>
                                        <option>3 Star</option>
                                        <option>4 Star</option>
                                        <option>5 Star</option>
                                    </select>
                                </div>
                                <div className="form-floating-field col-md-6">
                                    <label>Amenities</label>
                                    <i className="field-icon bi bi-suit-heart"></i>
                                    <input type="text" className="form-control" name="amenities" value={input.amenities} onChange={inputHandler} />
                                </div>
                                <div className="form-floating-field col-md-6">
                                    <label>Cleanliness Rating</label>
                                    <i className="field-icon bi bi-shield-check"></i>
                                    <select className="form-select" name="cleanliness_rating" value={input.cleanliness_rating} onChange={inputHandler}>
                                        <option value="">Select</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="form-floating-field col-md-6">
                                    <label>Overall Rating</label>
                                    <i className="field-icon bi bi-award"></i>
                                    <select className="form-select" name="overall_rating" value={input.overall_rating} onChange={inputHandler}>
                                        <option value="">Select</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="form-floating-field col-md-6">
                                    <label>Review Comments</label>
                                    <i className="field-icon bi bi-chat-left-quote"></i>
                                    <textarea className="form-control" rows="3" name="review_comments" value={input.review_comments} onChange={inputHandler}></textarea>
                                </div>
                                <div className="col-12 text-center mt-2">
                                    <button className="btn btn-gradient px-5" onClick={submitData}>Add Hotel Review</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddHotelreview;