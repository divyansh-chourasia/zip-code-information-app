import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { DataDisplay, Search , Error } from '../src/components/index'
import loadingImage from "../src/preloader.gif";

const ZipCodeLookup = () => {
  const [postalCode, setPostalCode] = useState("");
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLookup = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.zippopotam.us/in/${postalCode}`
      );
      setLocationData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching data. Please try again.");
      setLocationData(null);
    }
    setLoading(false);
  };

  const clearContent = () => {
    setLocationData(null);
    setPostalCode("");
    setError(null);
  };

  return (
    <div className="main">
      <Search
        postalCode={postalCode}
        setPostalCode={setPostalCode}
        handleLookup={handleLookup}
      />

      {error && <Error message={error} />}

      {loading && (
        <img src={loadingImage} className="loading-img" alt="loading" />
      )}

      {locationData && <DataDisplay locationData={locationData} />}

      <button className="myButton" onClick={clearContent}>
        Clear Content
      </button>
    </div>
  );
};

export default ZipCodeLookup;
