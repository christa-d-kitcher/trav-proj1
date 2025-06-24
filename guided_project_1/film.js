let filmNameH1;
let storylineSpan;
let filmProdSpan;
let releaseDateSpan;
let directorSpan;
let episodeNumSpan;
let homeworldsUl;
let charactersUl;

const baseUrl = `http://localhost:9001/api`;

// Runs on page load
addEventListener('DOMContentLoaded', () => {
  //filmNameH1 = document.querySelector('p#filmName');
  filmNameH1 = document.getElementById('filmName');
  storylineSpan = document.getElementById('openingCrawl');
  filmProdSpan = document.getElementById('filmProducer');
  releaseDateSpan = document.getElementById('filmReleaseDate');
  directorSpan = document.getElementById('filmDirector');
  episodeNumSpan = document.getElementById('filmEpNum');
  homeworldsUl = document.querySelector('#planetName>ul');
  charactersUl = document.querySelector('#characterNames>ul');

  const sp = new URLSearchParams(window.location.search)
  const id = sp.get('id')

  getFilm(id)
});

async function getFilm(id) {
    let film;
    let homeworlds;
    let characters;

    try {
      film = await fetchFilm(id);
      homeworlds = await fetchHomeworlds(film);
      console.log(homeworlds);
      characters = await fetchCharacters(film);
      console.log(characters);
    }
    catch (ex) {
      console.error(`Error reading film ${id} data.`, ex.message);
    }

    console.dir(film);
    renderFilm(film, characters, homeworlds);
  
  }

  async function fetchFilm(id) {
    let filmUrl = `${baseUrl}/films/${id}`;
    return await fetch(filmUrl)
      .then(res => res.json())
  }

  async function fetchHomeworlds(film) {
    const url = `${baseUrl}/films/${film.id}/planets`;
    const homeworlds = await fetch(url)
      .then(res => res.json())
    return homeworlds;
  }

  async function fetchCharacters(film) {
    const url = `${baseUrl}/films/${film.id}/characters`;
    const characters = await fetch(url)
      .then(res => res.json())
    return characters;
}


  const renderFilm = (film, characters, homeworlds) => {
    document.title = `SWAPI - ${film?.title}`;  // Just to make the browser tab say their name
    console.log(filmNameH1);
    filmNameH1.textContent = film?.title;
    storylineSpan.textContent = film?.opening_crawl;
    filmProdSpan.textContent = film?.producer;
    releaseDateSpan.textContent = film?.release_date;
    directorSpan.textContent = film?.director;
    episodeNumSpan.textContent = film?.episode_id;

    const charactersList = characters.map(character => `<li><a href="/character.html?id=${character.id}">${character.name}</li>`)
    charactersUl.innerHTML = charactersList.join("");
    charactersUl.addEventListener('click', () => goToCharacterPage(character.id));

    const homeworldsList = homeworlds.map(homeworld => `<li><a href="/planet.html?id=${homeworld.id}">${homeworld.name}</li>`)
    homeworldsUl.innerHTML = homeworldsList.join("");
    homeworldsUl.addEventListener('click', () => goToPlanetsPage(planet.id));

  }
  
  const goToCharacterPage = id => window.location = `/character.html?id=${id}`
  const goToPlanetsPage = id => window.location = `/planet.html?id=${id}`
















































// async function getFilm() {

//     try {

//         const searchParams = new URLSearchParams(window.location.search);
//         const id = searchParams.get('id');

//         // GET request
//         const film = {};
//         const characters = {};
//         const planets = {};

//         film = await fetch(`https://localhost:9001/api/films/${id}`)
//             .then(response => response.json())
//             .then(data => console.log('GET:', data))
//             .catch((error) => console.error('Error:', error));

//         characters = await fetch(`https://localhost:9001/api/films/${id}/characters`)
//             .then(response => response.json())
//             .then(data => console.log('GET:', data))
//             .catch((error) => console.error('Error:', error));

//         planets = await fetch(`https://localhost:9001/api/films/${id}/planets`)
//             .then(response => response.json())
//             .then(data => console.log('GET:', data))
//             .catch((error) => console.error('Error:', error));

//     } catch (error) {
//         console.error('Error:', error);
//         document.body.innerHTML = "There was an error loading the films";
//     }

// }



// function updateFilmPage(film) {
//     document.getElementById('filmName').innerHTML = "this is the film name";
//     document.getElementById('characterNames').innerHTML = "characters go here";
//     document.getElementById('planetNames').innerHTML = "planets go here";

//     //document.createElement('li')
    
// }
