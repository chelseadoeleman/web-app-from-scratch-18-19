'use strict'

require("dotenv").config()

import 'babel-polyfill'
import { MapBox } from "../js/components/MapBox.js"
import { UnsplashPhotos } from "../js/fetchers/UnsplashPhotos.js"

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

const images = new UnsplashPhotos()



