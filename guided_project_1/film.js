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
