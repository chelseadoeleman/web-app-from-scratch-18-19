import { MasterView} from '../components/MasterView'
import { setupMapBox } from '../helpers/mapboxGeo'
import { Loader }  from '../components/Loader'

export const handleIndexRoute = (parent, router) => {
    return async () => {
        parent.innerHTML = ''

        const sectionElement = document.createElement('section')
        const headingElement = document.createElement('h1')
        headingElement.innerText = 'Web App From Scratch'

        const mapRoot = document.createElement('div')
        mapRoot.id = 'map'
        mapRoot.style = 'min-width: 40vw; max-height: 90vh; margin-top: 2em; margin-right: 2em; position: relative;'
        
        Loader.toggleLoader()
        await new MasterView({ parent: sectionElement, router }).render()

        sectionElement.appendChild(mapRoot)
        parent.appendChild(headingElement)
        parent.appendChild(sectionElement)
        
        setupMapBox()
    }
}