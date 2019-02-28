import { DetailView } from '../components/DetailView' 
import { Loader } from '../components/Loader'

export const handleDetailRoute = (parent, router) => {
    return ({ id }) => {
        parent.innerHTML = ''

        const sectionElement = document.createElement('section')
        const headingElement = document.createElement('h1')
        
        headingElement.innerText = 'Web App From Scratch'
        headingElement.addEventListener('click', () => {
            router.navigate('/')
        })

        Loader.toggleLoader()

        new DetailView({ parent: sectionElement, router, id })

        parent.appendChild(headingElement)
        parent.appendChild(sectionElement)
    }
}