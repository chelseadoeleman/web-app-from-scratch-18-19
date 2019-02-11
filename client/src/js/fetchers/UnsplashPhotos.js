
import { times } from '../helpers/helpers.js'
export class UnsplashPhotos {
    constructor () {
        this.render()
    }

    render() {
        const pageNumbers = times(10)

        pageNumbers.forEach((pageNumber) => this.renderPageNumber(pageNumber))
    }

    async renderPageNumber (pageNumber) {
        const url='https://api.unsplash.com/photos/?client_id='
        const unsplash = { access: process.env.UNSPLASHACCESS }

        try {
            const response = await fetch(`${url}${unsplash.access}&page=${pageNumber}&per_page=30`, {headers: {'X-Ratelimit-Limit': '1000'}})
            const results = await response.json()
            results.forEach((result) => this.renderResult(result))
        } catch (error) {
            console.error(error)
            throw new Error(error)
        }
    }

    async renderResult (result) {
        const data = {
            photo: result.urls.regular,
            location: result.user && result.user.location || undefined
        }

        const url =  data.photo
        const location = data.location
        const showData = document.querySelector('.photos')
        let img = document.createElement('img')

        img.setAttribute('src', url)
        img.addEventListener('click', () =>  {
            location === undefined
            ? alert('Location Unknown')
            : geocoder.query(location)
        })
        showData.append(img)
    }
}


