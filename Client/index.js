import axios from 'axios';
const port = 3000;
//const { listaFilmova } = require('../Service/models/movieModel');
const dataServiceBaseUrl = `http://127.0.0.1:${port}`;

function getMovie() {
	//obican
	axios.get(dataServiceBaseUrl + '/api/movie')
		.then(response => { console.log('Success: ', response.data) })
		.catch(error => { debugger; console.error('Error: ', error) });
}

function getMovieById() {
	//request params
	axios.get(dataServiceBaseUrl + '/api/movie/1')
		.then(response => { console.log('Success: ', response.data) })
		.catch(error => { console.error('Error: ', error) });
}

function getMovieByRatingOrName() {
	//with query params
	const rating = 8;
	const name = 'Pulp Fiction';
	axios.get(dataServiceBaseUrl + `/api/movie?rating=${rating}&name=${name}`)
		.then(response => { console.log('Success: ', response.data) })
		.catch(error => { console.error('Error: ', error) });
}

function wontGetAnythingJustForShow() {
	//s ekstra headerima
	const config = {
		headers: {
			'Authorization': 'Bearer YourAuthToken',
			'Accept': 'application/json',
		},
	};
	axios.get(dataServiceBaseUrl + '/api', config)
		.then(response => { console.log('Success:', response.data) })
		.catch(error => { console.error('Error:', error) });
}

//POST REQUEST
function addMovie() {
	const postData = {
        id: 11,
        title: 'Forrest Gump',
	  };
	const headers = {
		'Content-Type': 'application/json',
	  };

	axios.post(dataServiceBaseUrl + '/api/movie', postData, {headers: headers} )
		.then(response => { console.log('Response:', response.data)})
		.catch(error => { debugger; console.error('Error:', error)});
}

//PUT REQUEST
function changeMovieInfo() {
	const updatedMovieData = {
        id: 10,
        title: 'Inception',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        year: 2010,
        rating: 9.9
    };
	  
	axios.put(dataServiceBaseUrl + '/api/movie/1', updatedMovieData)
		.then(response => { debugger; console.log('Response:', response.data)})
		.catch(error => { console.error('Error:', error)});
}

//PATCH REQUEST
function changePartOfMovieInfo() {
	const partialMovieData = {
		rating: 9.6
	};

	axios.patch(dataServiceBaseUrl + '/api/movie/1', partialMovieData)
		.then(response => { console.log('Response:', response.data)})
		.catch(error => { console.error('Error:', error)});
}

//DELETE REQUEST
function deleteMovie() {
	axios.delete(dataServiceBaseUrl + '/api/movie/1')
		.then(response => { console.log('Success: ', response.data) })
		.catch(error => { console.error('Error: ', error) });
}

//MAIN
//-------------------------------------- GET
//getMovie();
//getMovieById();
//getMovieByRatingOrName();
//wontGetAnythingJustForShow();

//-------------------------------------- POST
//addMovie();

//-------------------------------------- PUT
//changeMovieInfo();

//-------------------------------------- PATCH
//changePartOfMovieInfo();

//-------------------------------------- DELETE
//deleteMovie();

/*
ZADACI-3:
	1. Dodati nova dva filma
	2. Dohvatiti sve filmove
	3. Onom filmu s najmanjom ocjenom treba dati ocjenu 9.9
*/

/*

// 1. //
	function student_Dodaj_2_Filma() {
		const postData = [{
			id: 15,
			title: 'Die with fire',
		},
		{
			id: 155,
			title: 'Die with water this time'
		}];

		const headers = {
			'Content-Type': 'application/json',
		};

		axios.post(dataServiceBaseUrl + '/api/movie', postData, {headers: headers} )
			.then(response => { console.log('Response:', response.data)})
			.catch(error => { debugger; console.error('Error:', error)});
	}

	student_Dodaj_2_Filma();

*/

// 2. //
function student_Uzmi_Sve_Filmove() {
	//obican
	axios.get(dataServiceBaseUrl + '/api/movie')
		.then(response => { console.log('Success: ', response.data) })
		.catch(error => { debugger; console.error('Error: ', error) });
}

student_Uzmi_Sve_Filmove();

// 3. //
changeMovieInfo()


// ================================================================================================ //
// ========================================== ZADACI-4 ============================================ //
// ================================================================================================ //

/*
ZADACI-4:
Uvod:
Pokrenite klijent i servis

1. Zadatak (1)
Informaticari:
	- Potrebno je dodati funkcionalnost koja dodaje listu filmova u model.
	- Jedan film mora odgovarati prethodno definiranom modelu.
	- Input je lista objekata.

2. Zadatak (1)
Informaticari:
	- Potrebno je dodati funkcionalnost koja racuna medijan ocjena unesenih filmova
	- Nema input parametra

Kao dokaz da funkcionalnost radi, potrebno je pozvati funkcionalnost i ispisati rezultat.
*/

// 1. //

function dodajFilmove() {
	const postData = [
		{
			id: 20,
			title: 'Star Wars',
			genres: ['Fantasy'],
			year: 1995,
			rating: 9.5
		},
		{
			id: 25,
			title: 'Sharknado',
			genres: ['Horror'],
			year: 1990,
			rating: 9.0
		},
		{
			id: 30,
			title: 'My cheating wife',
			genres: ['Drama'],
			year: 2000,
			rating: 10
		},
		{
			id: 35,
			title: 'Best of me',
			genres: ['Comedy'],
			year: 1990,
			rating: 9.0
		}
	];

	const obj = Object.fromEntries(postData.map(item => [item.id, item.title, item.genres, item.year, item.rating]));

	const median = arr => {
		const mid = Math.floor(arr.length / 2),
		  nums = [...arr].sort((a, b) => a - b);
		return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
	  };
	  console.log(median([postData.rating]));



	const headers = {
		'Content-Type': 'application/json',
	  };

	axios.post(dataServiceBaseUrl + '/api/movie', postData, {headers: headers} )
		.then(response => { console.log('Response:', response.data)})
		.catch(error => { debugger; console.error('Error:', error)});
}

dodajFilmove()
/*
async function dodajListuFilmova() {
	const postData = {
        
	  };
	const headers = {
		'Content-Type': 'application/json',
	  };
	axios.post(dataServiceBaseUrl + '/api/movie', postData, {headers: headers} )
		.then(response => { console.log('Response:', response.data)})
		.catch(error => { debugger; console.error('Error:', error)});
}
dodajListuFilmova()
student_Uzmi_Sve_Filmove();
*/
async function dodajListuFilmova(x) {
	const postData = {
	  x
	};
  
	const headers = {
	  'Content-Type': 'application/json',
	};
  
	try {
	  const response = await axios.post(dataServiceBaseUrl + '/api/movie', postData, { headers });
  
	  console.log('Response:', response.data);
	} catch (error) {
	  debugger;
	  console.error('Error:', error);
	}
  }
  
  dodajListuFilmova();