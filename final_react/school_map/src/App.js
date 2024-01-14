import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css'; 
import shoolData from './data';
import marker from './Pinpoint.svg.png';
import { Icon } from 'leaflet'

// Custom icon for the marker
const myIcon = new Icon({
 iconUrl: marker,
 iconSize: [32,32]
})

/*
 * App component, which renders a map with markers and popups. 
 * It uses the MapContainer, TileLayer, Marker, and Popup components from the react-leaflet library. 
 * The shoolData array is mapped to create markers for each department, 
 * with their name, address, and opening hours displayed in a popup when clicked.
 */
function App() {
  return (
    <div className="App">
      <MapContainer center={[60.287261, 24.948133]} zoom={13} style={{ height: '1000px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© OpenStreetMap contributors'
        />
        {shoolData.map((department, index) => (
          <Circle center={department.latlng} pathOptions={{ fillColor: 'blue' }} radius={200}>
          <Marker key={index} position={department.latlng} icon={myIcon}> 
              <Popup>
                <div>
                  <h3 style={{backgroundColor: 'lightblue'}}>{department.name}</h3>
                  <h4 style={{backgroundColor: 'green'}}>Address: {department.address}</h4>
                  <p style={{backgroundColor: 'yellow'}}>Opening Hours: {department.openingHours}</p>
                  <p style={{backgroundColor: 'pink'}}>Coordinates: {department.latlng}</p>
                </div>
              </Popup>
            
          </Marker>
          </Circle>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;