import React, { useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import useDestination from "../../hooks/useDestination";
import Footer from "../../components/layout/Footer";

function Destinasi() {
    const { destinasi, loading, error} = useDestination();
    const baseUrl = 'http://localhost:3000/storage';
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="container py-8 mx-auto">
                {loading && <p className="text-center text-blue-500">Loading...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}
                {destinasi.map((dest) => (
                    <div key={dest._id} className="p-6 mb-8 bg-white rounded-lg shadow-md">
                        <h2 className="mb-4 text-2xl font-bold">{dest.title}</h2>
                        <p className="mb-4 text-gray-700">{dest.description}</p>
                        <img
                            src={`${baseUrl}/${dest.headerImg}`}
                            alt={dest.title}
                            className="object-cover w-full h-64 mb-4 rounded-lg"
                        />
                        <div>
                            <h3 className="mb-2 text-xl font-semibold">Spots</h3>
                            {dest.spots.length > 0 ? (
                                dest.spots.map((spot) => (
                                    <div key={spot._id} className="p-4 mb-4 rounded-lg bg-gray-50">
                                        <h4 className="text-lg font-semibold">{spot.title}</h4>
                                        <p className="text-gray-600">{spot.description}</p>
                                        <img
                                            src={`${baseUrl}/${spot.headerImg}`}
                                            alt={spot.title}
                                            className="object-cover w-full h-48 mt-2 rounded-lg"
                                        />
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500">No spots available</p>
                            )}
                        </div>
                        <div>
                            <h3 className="mb-2 text-xl font-semibold">Activities</h3>
                            {dest.activities.length > 0 ? (
                                dest.activities.map((activity) => (
                                    <div key={activity._id} className="p-4 mb-4 rounded-lg bg-gray-50">
                                        <h4 className="text-lg font-semibold">{activity.title}</h4>
                                        <p className="text-gray-600">{activity.description}</p>
                                        <img
                                            src={`${baseUrl}/${activity.headerImg}`}
                                            alt={activity.title}
                                            className="object-cover w-full h-48 mt-2 rounded-lg"
                                        />
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500">No activities available</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
}

export default Destinasi;
