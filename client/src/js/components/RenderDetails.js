export function renderDetails (result, parent) {
    const data = {
        url: result.urls.regular,
        width: result.width || undefined,
        height: result.height || undefined,
        likes: result.likes || undefined,
        name: result.user.name || undefined,
        user_photo: result.user && result.user["profile_image"] && result.user["profile_image"].large || undefined
    }
    
    localStorage.setItem('data', JSON.stringify(data));

    const { url, width, height, likes, name, user_photo } = data
    const elements = ['ul', 'div', 'li', 'li', 'li', 'li', 'img', 'img']
    const [list, imgWrapper, listWidth, listHeight, listLikes, listName, imgUrl, imgUser] = elements.map(el => document.createElement(el))

    listWidth.innerText = width
    listHeight.innerText = height
    listLikes.innerText = likes
    listName.innerText = name

    imgUrl.classList.add('head-image')
    imgUser.classList.add('user')

    imgUrl.setAttribute('src', url)
    imgUser.setAttribute('src', user_photo)
    
    

    imgWrapper.appendChild(imgUser)
    imgWrapper.appendChild(imgUrl)
    list.appendChild(imgWrapper)
    list.appendChild(listWidth)
    list.appendChild(listHeight)
    list.appendChild(listLikes)
    list.appendChild(listName)

    parent.appendChild(list)
}