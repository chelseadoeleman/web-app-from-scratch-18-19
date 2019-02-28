export class MapBox {
    constructor (options) {
        const { accessToken, container, style, zoom, center } = options
        mapboxgl.accessToken = accessToken
        return new mapboxgl.Map({
            container,
            style,
            zoom,
            center
        })
    }
} 