import { renderResult } from './RenderImages'
import { getUnsplashSearchUrl } from '../helpers/getUnsplashUrl.js'

export class Search {

    constructor() {
        this.render()
    }

    render() {
        const parent = document.querySelector('section')
        const searchBox = document.createElement('input')
        searchBox.setAttribute('type', 'text')
        searchBox.classList.add('searchBox')
        parent.appendChild(searchBox)
        
    }

    static searchQuery() {
        await this.renderDefaultPages(photos)

        searchBox.addEventListener('keyup', async (event) => {
            if (event.key !== 'Enter') {
                return
            }

            photos.innerHTML = ''
            
            const value = event.target.value

            if (!value || !value.length) {
                await this.renderDefaultPages(photos)
                return
            }
        })
    }
}