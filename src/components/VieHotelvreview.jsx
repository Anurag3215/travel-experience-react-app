import axios from "axios";
import React, { useEffect, useState } from "react";


const ViewHotelvreview = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.post("http://localhost:7500/view_hotel")
            .then((response) => {
                changeData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>

            <div className="container mt-4">

                <div className="card shadow">

                    <div className="card-header bg-primary text-white text-center">
                        <h3>View Hotel Reviews</h3>
                    </div>

                    <div className="card-body">

                        <div className="table-responsive">

                            <table className="table table-bordered table-striped table-hover">

                                <thead className="table-dark">

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
                                    </tr>

                                </thead>

                                <tbody>

                                    {
                                        data.map((value, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{value.review_id}</td>
                                                    <td>{value.hotel_name}</td>
                                                    <td>{value.location}</td>
                                                    <td>{value.room_type}</td>
                                                    <td>₹ {value.price_per_night}</td>
                                                    <td>{value.star_rating}</td>
                                                    <td>{value.amenities}</td>
                                                    <td>{value.cleanliness_rating}</td>
                                                    <td>{value.overall_rating}</td>
                                                    <td>{value.review_comments}</td>
                                                </tr>
                                            );
                                        })
                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ViewHotelvreview