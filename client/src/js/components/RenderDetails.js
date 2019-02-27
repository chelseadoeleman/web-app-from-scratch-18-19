export class RenderDetails {
    constructor(options) {
        this.options = options
        this.render()
    }

    render() {
        const data = this.getData()

        this.setDataToLocalStorage()
        this.renderDetails(data)
    }

    getData() {
        const { result } = this.options

        return {
            url: result.urls.regular,
            width: result.width || undefined,
            height: result.height || undefined,
            likes: result.likes || undefined,
            name: result.user.name || undefined,
            user_photo: result.user && result.user["profile_image"] && result.user["profile_image"].large || undefined
        }
    }

    setDataToLocalStorage() {
        const data = this.getData()

        localStorage.setItem('data', JSON.stringify(data))
    }

    renderDetails(data) {
        const { parent } = this.options
        const { url, width, height, likes, name, user_photo } = data
        const elements = [
            'ul',
                'li',
                    'img', 
                    'img',
                'li',
                'li',
                'li',
                'li'
        ]
        const [list, imgWrapper, imgUrl, imgUser, listWidth, listHeight, listLikes, listName] = elements.map(el => document.createElement(el))

        listWidth.innerText = width
        listHeight.innerText = height
        listLikes.innerText = likes
        listName.innerText = name

        imgUrl.classList.add('head-image')
        imgUser.classList.add('user')

        imgUrl.setAttribute('src', url)
        imgUser.setAttribute('src', user_photo)
        
        imgWrapper.classList.add('detail-image-wrapper')
        imgWrapper.appendChild(imgUser)
        imgWrapper.appendChild(imgUrl)
        list.appendChild(imgWrapper)
        list.appendChild(listWidth)
        list.appendChild(listHeight)
        list.appendChild(listLikes)
        list.appendChild(listName)

        parent.appendChild(list)
    }
}