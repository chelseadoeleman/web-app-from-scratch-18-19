export class Url {
    
}
const response = await fetch(`${url}${unsplash.access}&page=${pageNumber}&per_page=30`, {headers: {'X-Ratelimit-Limit': '1000'}})
const results = await response.json()