import { React, useState } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import useFetchData from "./useFetchData";



const Map = () => {
  const position = [57.543799, -5.504566];
  const initialMarker = [57.543799, -5.504566];
  const [activeHostel, setActiveHostel] = useState(initialMarker);

  const { hostels } = useFetchData();

  const markerClicked = (position) => {
    setActiveHostel(position);
  };

  const latitude = hostels.location.lat
  const longitude = hostels.location.long

  return (
    <>
    <MapContainer
            center={position}
            zoom={9}
            scrollWheelZoom={true}
            className="map">
              <TileLayer          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

          {
            hostels.map((hostel) => (
              <Marker
              key={hostel.id}
              position={[hostels.location.lat, hostels.location.long]}
              
              >

              </Marker>
            ))
          }

             
        
    </MapContainer>
    </>
  );
};

export default Map;
