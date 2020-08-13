import convert from 'xml-js'
import 'babel-polyfill';



const newAPIBaseURL = 'https://www.boardgamegeek.com/xmlapi2';
const oldAPIBaseURL = 'https://www.boardgamegeek.com/xmlapi';

export const searchGameAsync = async (searchTerm, exact=true) => {
    let response;
    let isExact = 1
    try {
    response = await fetch(`${newAPIBaseURL}/search?query=${searchTerm.toLowerCase()}&type=boardgame&exact=${isExact}`)
    } catch(e) {
        console.error(e);
    }
    
    let xml = await new Response(response.body).text();
    return convert.xml2js(xml, {compact: true})
}

export const fetchUserCollectionAsync = async(userName) => {
    let response;
    try {
    response = await fetch(`${newAPIBaseURL}/collection?username=${userName.toLowerCase()}&subtype=boardgame&own=1`)
    } catch (e){
        console.error(e);
    }
    let xml = await new Response(response.body).text();
    return convert.xml2js(xml, {compact: true})
}
