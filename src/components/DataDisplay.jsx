import React from "react";

const DataDisplay = ({ locationData }) => {
  return (
    <div className="location-data">
      <div>
        <p>Country:- </p>
        <p>State:- </p>
        <p>City:- </p>
      </div>

      <div>
        <p><b>{locationData.country} </b></p>
        <p><b> {locationData.places[0].state} </b></p>
        <p><b>{locationData.places[0]["place name"]} </b></p>
      </div>
    </div>
  );
};

export default DataDisplay;
