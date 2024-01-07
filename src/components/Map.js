import { React, useState, useSyncExternalStore } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

const Map = ({}) => {
  const position = [57.543799, -5.504566];
  const initialMarker = [57.543799, -5.504566];
  const [activeHostel, setActiveHostel] = useState(initialMarker);

  const markerClicked = (position) => {
    setActiveHostel(position);
  };

  return (
    <>
    <MapContainer>
        
    </MapContainer>
    </>
  );
};

export default Map;
