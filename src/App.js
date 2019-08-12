import React from "react";
import Iframe from "react-iframe";
import "./App.css";
import { OSMWithTile } from "./OSMWithTile";

const mapURL = "https://maps.google.com/maps?q=N%C3%BCrnberg%20Mathema%20software&t=&z=15&ie=UTF8&iwloc=&output=embed";

function App() {
  return (
    <div className="column">
      <div className="row">
        <div className="column">
          <p>Google Iframe</p>
          <Iframe url={mapURL} width="400px" height="400px" />
        </div>
        <div className="column">
          <p>OSM</p>
          <OSMWithTile tileProviderUrl="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png" />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <p>Spinal Map by Thunderforest</p>
          {/* Register at thunderforest to get 150000 free tile requests per month APIKEY */}
          <OSMWithTile tileProviderUrl="https://tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=<YOUR APIKEY>" />
        </div>
        <div className="column">
          <p>Open Cycle Map by Thunderforest</p>
          {/* Register at thunderforest to get 150000 free tile requests per month APIKEY */}
          <OSMWithTile tileProviderUrl="https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=<YOUR APIKEY>" />
        </div>
      </div>
    </div>
  );
}

export default App;
