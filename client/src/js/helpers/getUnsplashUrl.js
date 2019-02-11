export const getUnsplashUrl = (pageNumber) =>  {
    const baseUrl = 'https://api.unsplash.com/photos/?client_id='
    const unsplash = process.env.UNSPLASHACCESS
    const addPage = `&page=${pageNumber}`
    const resultsPage = '&per_page=30'
    return `${baseUrl}${unsplash}${addPage}${resultsPage}`
}