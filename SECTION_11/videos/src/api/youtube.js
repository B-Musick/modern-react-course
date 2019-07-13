import axios from 'axios';

const KEY = 'AIzaSyAjafPB40ewYOSrlGgDR6v4uTDdHzLIoGg';

export default axios.create({
    // This url, we can get the base and append what we want
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: { // Query string parameters we want to add to the end of the request
        // What is placed at the end of the url, shown on API webpage ('/search')
        part: 'snippet', // Tell youtube API which part of the video want to receive (title, ect)
        maxResults: 5, 
        key: KEY
        // We will pass in query string when want to access
    }
})
