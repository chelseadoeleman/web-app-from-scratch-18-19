import Navigo from 'navigo'
import { handleIndexRoute } from '../views/indexRoute'
import { handleDetailRoute } from '../views/detailRoute'
import { handleErrorRoute } from '../views/errorRoute'

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
              '/error': handleErrorRoute(main, router),
              '/': handleIndexRoute(main, router)
            })
            .notFound(() => {
                console.error('Error...')
                router.navigate('/error')
            }).resolve()
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}