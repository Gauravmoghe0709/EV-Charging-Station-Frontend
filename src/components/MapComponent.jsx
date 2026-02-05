import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ stations }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (mapRef.current) {
        mapRef.current.invalidateSize();
      }
    }, 300);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (mapRef.current) {
        mapRef.current.invalidateSize();
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="h-full w-full">
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        scrollWheelZoom
        className="h-full w-full"
        whenCreated={(map) => {
          mapRef.current = map;
        }}
      >
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {stations?.map((station) => {
          if (!station.location?.coordinates) return null;

          const [lng, lat] = station.location.coordinates;

          return (
            <Marker key={station._id} position={[lat, lng]}>
              <Popup>
                <strong>{station.name}</strong>
                <br />
                {station.address}
                <br />
                Status: {station.status}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
