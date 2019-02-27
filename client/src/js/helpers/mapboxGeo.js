require("dotenv").config()
import { MapBox } from "../components/MapBox"

export const geoCoder = new MapboxGeocoder({ 
    accessToken: process.env.MAPBOXKEY 
})

export function setupMapBox() {
    const mapBox = new MapBox ({
        accessToken: process.env.MAPBOXKEY,
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v9',
        zoom: 1,
        center: [4.895168, 52.370216]
    })

    mapBox.addControl(geoCoder)
}