import convert from 'xml-js'
import 'babel-polyfill';



const newAPIBaseURL = 'https://www.boardgamegeek.com/xmlapi2'
// const oldAPIBaseURL = 'https://www.boardgamegeek.com/xmlapi'

export const searchGameAsync = async (searchTerm) => {
    await fetch(`${newAPIBaseURL}/search?query=${searchTerm.toLowerCase()}exact=1`).then(xmlResults => {
        // const result = convert.xml2json(xmlResults, {compact: true, ignoreDoctype: true, spaces: 4})
        const result = xmlResults
        console.log(`SearchResult: ${result}`)
        return result;
    }).catch(
        error => console.log(error.message))
}







// export const bggXMLAPI1 = axios.create({
//     baseURL: `${corsOverride}https://www.boardgamegeek.com/xmlapi`,
//     params: {
        
//     }