import { DetailView } from '../components/DetailView' 

export function handleDetailRoute(parent, router) {
    return function({ id }) {
        parent.innerHTML = ''
        console.log(id)
        const sectionElement = document.createElement('section')
        const headingElement = document.createElement('h1')
        headingElement.innerText = 'Web App From Scratch'

        new DetailView({ parent: sectionElement, router, id })

        parent.appendChild(headingElement)
        parent.appendChild(sectionElement)
    }
}