import type {JSX} from "react"
import { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from "react-leaflet"

// Leaflet coordinates are a tuple (an array of fixed length and strictly ordered values) not an array of numbers, with the first value being latitude and the second being longitude
type MapProps = {
    coords: [number, number]
}

export default function Map({coords}: MapProps): JSX.Element {
    // Forces LeafletJS to recalculate its map size after the initial render (required because Leaflet initializes before the rest of the layout is complete, which causes the map size to be inaccurate)
    function FixMapSize() {
        // Returns the map object
        const map = useMap()

        // invalidateSize() tells Leaflet to recalculate the map size. "0" makes the code run after rendering has been completed, ensuring the map is resized at the correct time.
        useEffect( () => {
            setTimeout( () => {
                map.invalidateSize()
            }, 0)
        }, [map])

        // Unmounts only when the component unmounts
        return null
    }
    
    return (
        <MapContainer 
            className="w-full h-full"
            center={coords}
            zoom={14}
        >
            {/* Runs the above function inside the map (behavioral component) */}
            <FixMapSize />

            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}