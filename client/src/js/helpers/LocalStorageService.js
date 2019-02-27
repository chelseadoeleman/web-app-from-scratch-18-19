export class LocalStorageService {
    constructor(options) {
        this.options = options
        this.unsplashDetailPhotosKey = 'unsplash-detail-photos'
    }

    merge(key, result) {
        const existingData = this.get(key)
        const mergedData = [...existingData, result]

        this.set(key, mergedData)
    }

    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            throw new Error(error)
        }
    }

    get(key) {
        try {
            return JSON.parse(localStorage.getItem(key))
        } catch (error) {
            throw new Error(error)
        }
    }
}