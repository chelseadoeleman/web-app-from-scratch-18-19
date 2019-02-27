import { times } from '../helpers/helpers.js'
import { Fetcher } from './Fetcher.js'
import { getUnsplashUrl} from '../helpers/getUnsplashUrl.js'
import { Loader } from './Loader.js'
import { Search } from './Search.js'
import { renderResult } from './RenderImages'

export class UnsplashPhotos {
    constructor (options) {
        this.options = options
    }

    async render() {
        const { parent, router } = this.options
        const photos = document.createElement('div')
        photos.classList.add('photos')

        await this.renderDefaultPages(photos)

        new Search({ parent, renderPage : this.renderDefaultPages.bind(this), photos, router })

        parent.appendChild(photos)
        Loader.toggleLoader()
    }
    
    async renderDefaultPages(parent) {
        const pageNumbers = times(10)
        await Promise.all(pageNumbers.map((pageNumber) => this.renderPageNumber(pageNumber, parent)))
    }

    async renderPageNumber (pageNumber, parent) {
        try {
            const { router } = this.options
            const url = getUnsplashUrl(pageNumber)
            const results = await new Fetcher({ url, options: {headers: {'X-Ratelimit-Limit': '1000'}} }).fetch()
            results.forEach((result) => renderResult(result, parent, router))
        } catch (error) {
            console.error(error)
            throw new Error(error)
        }
    }

}


