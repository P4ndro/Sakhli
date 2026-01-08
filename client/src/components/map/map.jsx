import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";

function Map() {
      return (
            <MapContainer center={[51.505, -1.5]} zoom={13} scrollWheelZoom={false} className="map">
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty popup.
                    </Popup>
                </Marker>
            </MapContainer>
            );
    
}
export default Map;