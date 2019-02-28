'use strict'

import 'babel-polyfill'
import { Router } from '../js/routes/routes'
import { LocalStorageService } from './helpers/localStorageService'

(() => {
    const localStorageService = new LocalStorageService()
    const existingData = localStorageService.get(localStorageService.unsplashDetailPhotosKey)
    
    if (!existingData || existingData.length === 0) {
        localStorageService.set(localStorageService.unsplashDetailPhotosKey, [])
    }

    Router()
})()

