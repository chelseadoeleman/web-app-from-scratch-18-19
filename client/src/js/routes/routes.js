import Navigo from 'navigo'
import { handleIndexRoute } from '../views/indexRoute'
import { handleDetailRoute } from '../views/detailRoute'

const root = null
const useHash = true
const hash = '#'
const router = new Navigo(root, useHash, hash)

export function Router() {
    const main = document.querySelector('main')

    try {
        router
          .on({
            '/detail/:id': handleDetailRoute(main, router),
            '*': handleIndexRoute(main, router)
          }).resolve()
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}