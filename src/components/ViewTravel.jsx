import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewTravel = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.post("http://localhost:7500/view_travel")
            .then((response) => {
                changeData(response.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>

            <div className="container mt-5">

                <h2 className="text-center mb-4 text-primary">
                    View Travel Experiences
                </h2>

                <table className="table table-bordered table-striped table-hover">

                    <thead className="table-dark">
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
                        </tr>
                    </thead>

                    <tbody>

                        {data.map((value, index) => (

                            <tr key={index}>
                                <td>{value.experience_id}</td>
                                <td>{value.destination}</td>
                                <td>{value.state_country}</td>
                                <td>{value.travel_date}</td>
                                <td>{value.budget}</td>
                                <td>{value.duration}</td>
                                <td>{value.best_place}</td>
                                <td>{value.food_recommendation}</td>
                                <td>{value.rating}</td>
                                <td>{value.travel_tips}</td>
                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default ViewTravel