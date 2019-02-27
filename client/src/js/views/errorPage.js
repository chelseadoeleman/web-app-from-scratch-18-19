import { Loader } from '../components/Loader'

export function handleErrorRoute(parent, router) {
    return async function() {
        parent.innerHTML = ''

        const sectionElement = document.createElement('section')
        const headingElement = document.createElement('h1')
        const errorHeading = document.createElement('h2')
        const errorMessage = document.createElement('p')
        const backToHome = document.createElement('a')
        
        headingElement.innerText = 'Web App From Scratch'
        errorHeading.innerText = 'OOPS!'
        errorMessage.innerText = 'This page does not seem to exist... But we know a page that does exist:'
        backToHome.innerText = `Let's go back to an existing page!`
        backToHome.addEventListener('click', () => {
            router.navigate('/')
        })

        Loader.toggleLoader()

        parent.appendChild(headingElement)
        parent.appendChild(sectionElement)
        parent.appendChild(errorHeading)
        parent.appendChild(errorMessage)
        parent.appendChild(backToHome)
        
        Loader.toggleLoader()
    }
}