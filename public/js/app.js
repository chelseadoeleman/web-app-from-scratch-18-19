'use strict'

const showData = document.querySelector('.photos')
const url='https://api.unsplash.com/photos/?client_id='

const unsplash = {
    access: 'd633cd88d3ab4d70df0bfa48b64ee1241d0d56f25c16a78e451f20172dbda585'
}

mapboxgl.accessToken = 'pk.eyJ1IjoibWVsa2JvZXIiLCJhIjoiY2pydDZnemZrMGk2NTQ0bnB5N2FzYnY4ZSJ9.6Rz3rv9QYard69Bd1_onig'
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    zoom: 1,
    // Center Amsterdam
    center: [4.895168, 52.370216],
})
// Add searchbar
const geocoder = new MapboxGeocoder({ 
    accessToken: mapboxgl.accessToken 
})
map.addControl(geocoder)

// Get page numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Map over page numbers to get the requested pages
numbers.forEach(async page => {
    try {
        const response = await fetch(`${url}${unsplash.access}&page=${page}&per_page=30`, 
        {
            // Add header with rate-limit to send more than 50 request per hour
            headers: {"X-Ratelimit-Limit": "1000"}
        })
        // json already an object - cannot parse
        const results = await response.json()
        results.forEach(result => {
            
            // New data object
            const data = {
                photo: result.urls.regular,
                location: result.user && result.user.location || undefined
            }

            const url =  data.photo
            const location = data.location
            let img = document.createElement("img")

            img.setAttribute("src", url)
            // On click fetch the location of the photo and send to mapbox query
            img.addEventListener('click', function () {
                location === undefined ? 
                alert("Location Unknown")
                // Add query function to pass the location to mapbox
                : geocoder.query(location)
            })
            showData.append(img)

        })

    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
})