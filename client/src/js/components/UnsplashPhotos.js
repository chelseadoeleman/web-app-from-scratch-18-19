import { times } from '../helpers/helpers.js'
import { Fetcher } from './Fetcher.js'
import { getUnsplashUrl } from '../helpers/getUnsplashUrl.js'
import { geoCoder } from '../helpers/mapboxGeo.js'

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
        const { router } = this.options
        const data = {
            photo: result.urls.regular,
            location: result.user && result.user.location || undefined,
            id: result.id,
        }

        const { location, photo: url, id } = data
        let wrapper = document.createElement('div')
        let img = document.createElement('img')
        let link = document.createElement('a')

        wrapper.classList.add('image-wrapper')

        img.setAttribute('src', url)
        img.addEventListener('click', () =>  {
            location === undefined
                console.log(location)
                ? alert('Location Unknown')
                : geoCoder.query(location)
        })

        link.addEventListener('click', () => {
            router.navigate(`/detail/${id}`)
        })
        link.innerText = 'More about this picture'

        wrapper.appendChild(img)
        wrapper.appendChild(link)
        parent.appendChild(wrapper)
    }
}


