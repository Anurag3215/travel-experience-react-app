import axios from 'axios'
import React, { useState } from 'react'


const AddTravel = () => {

    const [input, setInput] = useState({

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

    })

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValues = () => {

        console.log(input)

        axios.post("http://localhost:7500/add_travel", input)
            .then((response) => {
                alert("Travel Experience Added Successfully")
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err)
                alert("Failed to Add Travel Experience")
            })

    }

    return (
        <div>



            <div className="container mt-5">

                <div className="card shadow p-4">

                    <div className="travel-header">
                        <h2>Add Travel Experience</h2>
                    </div>

                    <div className="row g-3">

                        <div className="col-md-6">
                            <label>Experience ID</label>
                            <input
                                type="text"
                                className="form-control"
                                name="experience_id"
                                value={input.experience_id}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-md-6">
                            <label>Destination</label>
                            <input
                                type="text"
                                className="form-control"
                                name="destination"
                                value={input.destination}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-md-6">
                            <label>State / Country</label>
                            <input
                                type="text"
                                className="form-control"
                                name="state_country"
                                value={input.state_country}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-md-6">
                            <label>Travel Date</label>
                            <input
                                type="text"
                                className="form-control"
                                name="travel_date"
                                value={input.travel_date}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-md-6">
                            <label>Budget (₹)</label>
                            <input
                                type="text"
                                className="form-control"
                                name="budget"
                                value={input.budget}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-md-6">
                            <label>Duration</label>
                            <input
                                type="text"
                                className="form-control"
                                name="duration"
                                value={input.duration}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-md-6">
                            <label>Best Place</label>
                            <input
                                type="text"
                                className="form-control"
                                name="best_place"
                                value={input.best_place}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-md-6">
                            <label>Food Recommendation</label>
                            <input
                                type="text"
                                className="form-control"
                                name="food_recommendation"
                                value={input.food_recommendation}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-md-6">
                            <label>Rating</label>
                            <select
                                className="form-control"
                                name="rating"
                                value={input.rating}
                                onChange={inputHandler}
                            >
                                <option value="">--SELECT--</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>

                        <div className="col-md-6">
                            <label>Travel Tips</label>
                            <textarea
                                className="form-control"
                                rows="2"
                                name="travel_tips"
                                value={input.travel_tips}
                                onChange={inputHandler}
                            ></textarea>
                        </div>

                        <div className="col-12 text-center">
                            <button
                                className="btn btn-primary px-5"
                                onClick={readValues}
                            >
                                Add Travel Experience
                            </button>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AddTravel