const axios = require('axios');
const port = 3000;
const dataServiceBaseUrl = `http://127.0.0.1:${port}`;

function getMovieByRatingOrName() {
	//with query params
	const rating = 8;
	const name = 'Pulp Fiction';
	axios.get(dataServiceBaseUrl + `/api/movie?rating=${rating}&name=${name}`)
		.then(response => { console.log('Success: ', response.data) })
		.catch(error => { console.error('Error: ', error) });
}

getMovieByRatingOrName();