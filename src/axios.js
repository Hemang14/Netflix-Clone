import axios from 'axios';

/** base url to make request to the themoviedatabase */

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3'
});

// instance.get('/foo-bar');   // if we do this then it looks like 
// https://api.themoviedb.org/3/foo-bar  // like this

export default instance;