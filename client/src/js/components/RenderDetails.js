export class RenderDetails {
    constructor(options) {
        this.options = options
        this.render()
    }

    render() {
        const { data } = this.options

        this.renderDetails(data)
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

        listName.innerText = 'Username: ' + name
        listWidth.innerText = 'Width: ' + width
        listHeight.innerText = 'Height: ' + height
        likes === undefined 
            ? listLikes.innerText = 'Likes: ' + 0
            : listLikes.innerText = 'Likes: ' + likes

        imgUrl.classList.add('head-image')
        imgUser.classList.add('user')

        imgUrl.setAttribute('src', url)
        imgUser.setAttribute('src', user_photo)
        
        imgWrapper.classList.add('detail-image-wrapper')
        imgWrapper.appendChild(imgUser)
        imgWrapper.appendChild(imgUrl)
        list.appendChild(imgWrapper)
        list.appendChild(listName)
        list.appendChild(listWidth)
        list.appendChild(listHeight)
        list.appendChild(listLikes)

        parent.appendChild(list)
    }
}