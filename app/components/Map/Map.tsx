"use client";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from 'leaflet';
import { useEffect } from 'react';
import Link from 'next/link';

const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function MapPlaceholder() {
  const map = useMap();
  useEffect(() => {
    // Force la mise à jour après un micro-délai pour laisser le DOM respirer
    setTimeout(() => {
      map.invalidateSize();
    }, 2000);
  }, [map]);
  return null;
}

const Map = () => {
  return (
    <MapContainer
      center={[44.966671, 4.85]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }} // Important
    >
      {/* On appelle le correcteur ici */}
      <MapPlaceholder />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[44.966671, 4.85]} icon={icon}>
        <Popup>
          <Link href={"https://www.google.com/maps/place/Vins+Voctor/@44.9635465,4.8486378,17z/data=!3m1!4b1!4m6!3m5!1s0x47f5599630691f45:0x718f09f48203c92f!8m2!3d44.9635465!4d4.8486378!16s%2Fg%2F11y1y_bzc8?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"}
          target="_blank"
          >
            Ouvrir en Google Maps
          </Link>
        </Popup>

      </Marker>
    </MapContainer>
  );
};

export default Map;