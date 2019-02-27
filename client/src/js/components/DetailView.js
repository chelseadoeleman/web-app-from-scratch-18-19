import { Fetcher } from './Fetcher'
import { getUnsplashDetail } from '../helpers/getUnsplashUrl'
import { Loader } from './Loader'
import { RenderDetails } from './RenderDetails';


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
            new RenderDetails({result, parent})
            Loader.toggleLoader()
        } catch (error) {
            console.error(error)
            throw new Error(error)
        }
    }
}