export function handleDetailRoute(parent, router) {
    parent.innerHTML = ''
    
    return function() {
        console.log("Dit is de detail")
    }
}