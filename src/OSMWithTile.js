import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./OSM.css";

const attributionText = "&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
const lat = 49.4644051
const lng = 11.0838088

export const OSMWithTile = ({tileProviderUrl}) =>
    <Map center={[lat, lng]} zoom={15} easeLinearity={0.35} >
        <TileLayer url={tileProviderUrl} attribution={attributionText} />
        <Marker position={[lat, lng]}>
            <Popup>MATHEMA Software Gmbh</Popup>
        </Marker>
    </Map>
