import { UnsplashPhotos } from "../components/UnsplashPhotos"
import { setupMapBox } from "../helpers/mapboxGeo";

export function handleIndexRoute(parent, router) {
    parent.innerHTML = ''

    return function() {
        const sectionElement = document.createElement('section')
        const headingElement = document.createElement('h1')
        headingElement.innerText = 'Web App From Scratch'
        const mapRoot = document.createElement('div')
        mapRoot.id = 'map'
        mapRoot.style = 'min-width: 40vw; max-height: 90vh; margin-top: 2em; margin-right: 2em;'

        new UnsplashPhotos({ parent: sectionElement, router })

        sectionElement.appendChild(mapRoot)
        parent.appendChild(headingElement)
        parent.appendChild(sectionElement)
        setupMapBox()
    }
}