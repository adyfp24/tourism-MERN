import React, { useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import useDestination from "../../hooks/useDestination";
import Footer from "../../components/layout/Footer";
import { useParams } from 'react-router-dom';

function DetailDestinasi() {
  const { dest, loading, error, getDataById } = useDestination();
  const { id } = useParams();
  const baseUrl = 'http://localhost:3000/storage';

  useEffect(() => {
    getDataById(id)
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container py-8 mx-auto">
        {loading && <p className="text-center text-blue-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {dest && (
          <div key={dest._id} className="p-6 mb-8 bg-white rounded-lg shadow-md">
            <section
              id="head-section"
              className="flex flex-col-reverse justify-between mx-8 mb-6 sm:mx-16 sm:flex-row pt-14 sm:pt-8 sm:mb-12"
            >
              <div className="flex flex-col w-full font-sans sm:w-1/2">
                <div className="mt-6 text-4xl font-bold sm:mt-14 md:text-8xl">
                  <h1 className="tracking-wider">{dest.title}</h1>
                </div>
                <div className="mt-4 ml-1 text-xl font-thin text-justify sm:mt-10">
                  <p className="">
                  {dest.description}
                  </p>
                </div>
              </div>
              <div className="flex justify-end w-full sm:w-1/2 sm:px-0">
                <img
                  className="animate__animated animate__fadeInRight"
                  src={`${baseUrl}/${dest.headerImg}`}
                  alt=""
                />
              </div>
            </section>
            
            <div>
              <h3 className="mb-2 text-xl font-semibold">Spots</h3>
              {dest.spots.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {dest.spots.map((spot) => (
                    <div key={spot._id} className="flex flex-col justify-between p-4 mb-4 rounded-lg shadow-lg h-96 bg-gray-50">
                      <div>
                        <h4 className="text-lg font-semibold">{spot.title}</h4>
                        <p className="text-gray-600">{spot.description}</p>
                      </div>
                      <div>
                        <img
                          src={`${baseUrl}/${spot.headerImg}`}
                          alt={spot.title}
                          className="object-cover w-full h-48 mt-2 rounded-lg"
                        />
                      </div>
                    </div>
                  ))}
                </div>

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
        )}
      </div>
      <Footer />
    </div>
  );
}

export default DetailDestinasi;
