import { Fetcher } from './Fetcher'
import { getUnsplashDetail } from '../helpers/getUnsplashUrl'
import { Loader } from './Loader'
import { RenderDetails } from './RenderDetails'
import { LocalStorageService } from '../helpers/localStorageService'

export class DetailView {
    constructor (options) {
        this.options = options
        this.render()
    }

    async render() {
        const { parent, id } = this.options

        this.renderId(id, parent)
    }

    renderId (id, parent) {
        try {
            const localStorageService = new LocalStorageService()
            const existingStorageData = localStorageService.get(localStorageService.unsplashDetailPhotosKey)
            
            if (!existingStorageData || existingStorageData.length === 0) {
                this.handleNewPageResult(id, localStorageService, parent)
            } else {
                const currentPageResult = existingStorageData.find(result => result.id === id)

                if (!currentPageResult) {
                    this.handleNewPageResult(id, localStorageService, parent)
                } else {
                    new RenderDetails({data: currentPageResult, parent})
                    Loader.toggleLoader()
                }
            }
        } catch (error) {
            console.error(error)
            throw new Error(error)
        }
    }

    async handleNewPageResult(id, localStorageService, parent) {
        const url = getUnsplashDetail(id)
        const result = await new Fetcher({ url, options: {headers: {'X-Ratelimit-Limit': '1000'}} }).fetch()
        const data = this.cleanJSONData(result)

        new RenderDetails({data, parent})
        
        localStorageService.merge(localStorageService.unsplashDetailPhotosKey, data)

        Loader.toggleLoader()
    }

    cleanJSONData(result) {
        return {
            id: result.id,
            url: result.urls.regular,
            width: result.width || undefined,
            height: result.height || undefined,
            likes: result.likes || undefined,
            name: result.user.name || undefined,
            user_photo: result.user && result.user["profile_image"] && result.user["profile_image"].large || undefined
        }
    }
}