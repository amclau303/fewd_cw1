import { React, useState } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import {Icon} from "leaflet";
import useFetchData from "./useFetchData";
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const position = [57.896333, -5.156314  ];
  const initialMarker = [57.543799, -5.504566];
  const [activeHostel, setActiveHostel] = useState(initialMarker);

  const icon = new Icon({
    iconUrl: "/markerIcon.svg",
    iconSize: [30, 30],
  });
  const { status, hostels } = useFetchData();

  const markerClicked = (position) => {
    setActiveHostel(position);
  };

  console.log(hostels);
  if (status === "fetched")
    return (
      <>
        <MapContainer
          center={position}
          zoom={9}
          scrollWheelZoom={true}
          className="map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {hostels.map((hostel) => (
            <Marker 
            key={hostel.id}
            position={[hostel.location.lat, hostel.location.long]}
            icon={icon}
            >
              <Popup>
                Here is the location of {hostel.name}.
                Average Rating:
                <a href="/aa">H</a>
              </Popup>
            </Marker>
            
          ),
  
          )}
        </MapContainer>
       
      </>
    );
};

export default Map;
