import axios from "axios"
import React, { useState } from "react"


const AddHotelreview = () => {

    const [input, changeInput] = useState({
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
    });

    const [message, setMessage] = useState("")
    const [error, setError] = useState(false)

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const submitData = () => {

        axios.post(
            "http://localhost:7500/add_hotel",
            input
        )
        .then((response) => {

            setError(false);
            setMessage("Hotel Review Added Successfully");

            changeInput({
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
            });

        })
        .catch((err) => {

            setError(true);

            if (err.response && err.response.data.message) {
                setMessage(err.response.data.message)
            } else {
                setMessage("Something went wrong")
            }

        })

    }

    return (
        <div>


            <div className="container mt-4">

                <div className="card shadow">

                    <div className="card-header bg-primary text-white text-center">
                        <h3>Add Hotel Review</h3>
                    </div>

                    <div className="card-body">

                        <div className="row g-3">

                            <div className="col-md-6">
                                <label className="form-label">Review ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="review_id"
                                    value={input.review_id}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Hotel Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="hotel_name"
                                    value={input.hotel_name}
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
                                <label className="form-label">Room Type</label>
                                <select
                                    className="form-control"
                                    name="room_type"
                                    value={input.room_type}
                                    onChange={inputHandler}
                                >
                                    <option value="">Select</option>
                                    <option>Standard</option>
                                    <option>Deluxe</option>
                                    <option>Executive</option>
                                    <option>Suite</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Price Per Night</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="price_per_night"
                                    value={input.price_per_night}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Star Rating</label>
                                <select
                                    className="form-control"
                                    name="star_rating"
                                    value={input.star_rating}
                                    onChange={inputHandler}
                                >
                                    <option value="">Select</option>
                                    <option>1 Star</option>
                                    <option>2 Star</option>
                                    <option>3 Star</option>
                                    <option>4 Star</option>
                                    <option>5 Star</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Amenities</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="amenities"
                                    value={input.amenities}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Cleanliness Rating</label>
                                <select
                                    className="form-control"
                                    name="cleanliness_rating"
                                    value={input.cleanliness_rating}
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
                                <label className="form-label">Overall Rating</label>
                                <select
                                    className="form-control"
                                    name="overall_rating"
                                    value={input.overall_rating}
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
                                <label className="form-label">Review Comments</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    name="review_comments"
                                    value={input.review_comments}
                                    onChange={inputHandler}
                                ></textarea>
                            </div>

                            <div className="col-12 text-center">
                                <button
                                    className="btn btn-primary"
                                    onClick={submitData}
                                >
                                    Add Hotel Review
                                </button>
                            </div>

                            <div className="col-12 text-center">
                                <h5 className={error ? "text-danger" : "text-success"}>
                                    {message}
                                </h5>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default AddHotelreview