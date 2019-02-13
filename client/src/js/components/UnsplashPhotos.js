import { times } from '../helpers/helpers.js'
import { Fetcher } from './Fetcher.js'
import { getUnsplashUrl } from '../helpers/getUnsplashUrl.js'


export class UnsplashPhotos {
    constructor (options) {
        this.options = options
        this.render()
    }

    async render() {
        const { parent } = this.options
        const pageNumbers = times(10)
        const photos = document.createElement('div')
        photos.classList.add('photos')
        pageNumbers.forEach((pageNumber) => this.renderPageNumber(pageNumber, photos))
        parent.appendChild(photos)
    }

    async renderPageNumber (pageNumber, parent) {
        try {
            const url = getUnsplashUrl(pageNumber)
            const results = await new Fetcher({ url, options: {headers: {'X-Ratelimit-Limit': '1000'}} }).fetch()
            results.forEach((result) => this.renderResult(result, parent))
        } catch (error) {
            console.error(error)
            throw new Error(error)
        }
    }

    async renderResult (result, parent) {
        const data = {
            photo: result.urls.regular,
            location: result.user && result.user.location || undefined
        }

        const { location, photo: url } = data
        let img = document.createElement('img')

        img.setAttribute('src', url)
        img.addEventListener('click', () =>  {
            location === undefined
                ? alert('Location Unknown')
                : geocoder.query(location)
        })

        parent.appendChild(img)
    }
}


