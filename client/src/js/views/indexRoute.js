require("dotenv").config()
import { UnsplashPhotos } from "../components/UnsplashPhotos"
import { MapBox } from "../components/MapBox.js"

export function handleIndexRoute(parent, router) {
    parent.innerHTML = ''

    return function() {
        const sectionElement = document.createElement('section')
        const headingElement = document.createElement('h1')
        headingElement.innerText = 'Web App From Scratch'
        const mapRoot = document.createElement('div')
        mapRoot.id = 'map'
        mapRoot.style = 'min-width: 40vw; max-height: 90vh; margin-top: 2em; margin-right: 2em;'

        new UnsplashPhotos({ parent: sectionElement })

        sectionElement.appendChild(mapRoot)
        parent.appendChild(headingElement)
        parent.appendChild(sectionElement)

        const mapBox = new MapBox ({
            accessToken: process.env.MAPBOXKEY,
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v9',
            zoom: 1,
            center: [4.895168, 52.370216]
        })
        
        const geoCoder = new MapboxGeocoder({ 
            accessToken: process.env.MAPBOXKEY 
        })
        mapBox.addControl(geoCoder)
    }
}