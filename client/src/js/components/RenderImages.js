
import { geoCoder } from '../helpers/mapboxGeo'

export function RenderMaster (result, parent, router) {
    const data = {
        photo: result.urls.regular,
        location: result.user && result.user.location || undefined,
        id: result.id
    }

    const { location, photo: url, id } = data	 
    let wrapper = document.createElement('div')
    let img = document.createElement('img')
    let link = document.createElement('a')

    wrapper.classList.add('image-wrapper')

    img.setAttribute('src', url)
        img.addEventListener('click', () =>  {
            location === undefined
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

// export class RenderMaster {
//     constructor(options) {
//         this.options = options
//         this.render()
//     }

//     render() {
//         const data = this.getData()

//         this.renderImages(data)
//     }

//     getData() {
//         const { result } = this.options

//         return {
//             photo: result.urls.regular,
//             location: result.user && result.user.location || undefined,
//             id: result.id,
//         }
//     }

//     renderImages(data) {
//         const { parent, router } = this.options
//         const { location, photo: url, id } = data
//         let wrapper = document.createElement('div')
//         let img = document.createElement('img')
//         let link = document.createElement('a')

//         wrapper.classList.add('image-wrapper')

//         img.setAttribute('src', url)
//         img.addEventListener('click', () =>  {
//             location === undefined
//                 ? alert('Location Unknown')
//                 : geoCoder.query(location)
//         })

//         link.addEventListener('click', () => {
//             router.navigate(`/detail/${id}`)
//         })
//         link.innerText = 'More about this picture'

//         wrapper.appendChild(img)
//         wrapper.appendChild(link)
//         parent.appendChild(wrapper)
//     }
// }