import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet';

const OSMAttribution = "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors";

L.Marker.prototype.options.icon = L.icon({
    iconUrl: "/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "/images/marker-shadow.png",
    shadowSize: [41, 41],
});

export default function Map({ pos, popup }) {
    return (
        <MapContainer
            center={pos}
            zoom={16}
            style={{ height: '300px', width: '100%' }}
        >
            <TileLayer attribution={OSMAttribution} url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={pos}>
                <Popup>
                    {popup}
                </Popup>
            </Marker>
        </MapContainer>

    )
}