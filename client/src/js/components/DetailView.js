import { Fetcher } from './Fetcher.js'
import { getUnsplashDetail } from '../helpers/getUnsplashUrl'


export class DetailView {
    constructor (options) {
        this.options = options
        this.render()
    }

    async render() {
        const { parent, id } = this.options
        const user = document.createElement('div')
        user.classList.add('user')
        parent.appendChild(user)
        this.renderId(id, parent)
    }

    async renderId (id, parent) {
        try {
            const url = getUnsplashDetail(id)
            const result = await new Fetcher({ url, options: {headers: {'X-Ratelimit-Limit': '1000'}} }).fetch()
            this.renderResult(result, parent)
        } catch (error) {
            console.error(error)
            throw new Error(error)
        }
    }

    async renderResult (result, parent) {
        const data = {
            url: result.urls.regular,
            width: result.width || undefined,
            height: result.height || undefined,
            likes: result.likes || undefined,
            name: result.user.name || undefined,
            user_photo: result.user && result.user["profile_image"] && result.user["profile_image"].large || undefined
        }

        const { url, width, height, likes, name, user_photo } = data

        const list = document.createElement('ul')
        const listItem = document.createElement('li')
        const listWidth = document.createElement('li')
        const listHeight = document.createElement('li')
        const listLikes = document.createElement('li')
        const listName = document.createElement('li')
        const imgUrl = document.createElement('img')
        const imgUser = document.createElement('img')

        listWidth.innerText = width
        listHeight.innerText = height
        listLikes.innerText = likes
        listName.innerText = name

        imgUrl.classList.add('head-image')
        imgUser.classList.add('user')

        imgUrl.setAttribute('src', url)
        imgUser.setAttribute('src', user_photo)
        
        

        listItem.appendChild(imgUser)
        list.appendChild(listItem)
        list.appendChild(listWidth)
        list.appendChild(listHeight)
        list.appendChild(listLikes)
        list.appendChild(listName)
        listItem.appendChild(imgUrl)
    
        parent.appendChild(list)
    }
}