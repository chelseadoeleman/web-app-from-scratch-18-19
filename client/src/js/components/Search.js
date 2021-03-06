import { RenderImages} from './RenderImages'
import { getUnsplashSearchUrl } from '../helpers/getUnsplashUrl'
import { Fetcher } from './Fetcher'

export class Search {
    constructor(options) {
        this.options = options
        this.render()
    }

    render() {
        const { parent } = this.options

        const searchBox = document.createElement('input')
        searchBox.setAttribute('type', 'text')
        searchBox.classList.add('searchBox')

        searchBox.addEventListener('keyup', (event) => this.handleSearch(event))

        parent.appendChild(searchBox)
    }

    async handleSearch(event) {
        const { renderPage, photos, router } = this.options
        
        if (event.key !== 'Enter') {
            return
        }

        photos.innerHTML = ''

        const value = event.target.value

        if (!value || !value.length) {
            await renderPage(photos)
            return
        }

        const url = getUnsplashSearchUrl(value)
        const { results } = await new Fetcher({ url, options: {headers: {'X-Ratelimit-Limit': '1000'}} }).fetch()
        console.log(results)
        if (results.length === 0) {
            const message = document.createElement('p')
            message.classList.add('no-images')
            message.innerHTML= 'No images can be found'
            photos.append(message)
        } else {
            results.forEach((result) => RenderImages(result, photos, router))
        }
    }
}