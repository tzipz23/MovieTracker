let addInfo = false
let addTrailer = false
const movieUrl = 'http://localhost:3000/movies'
const actorUrl = 'http://localhost:3000/actors'
const addMovieForm = () => document.querySelector(".add-movie-form")
const infoContainer = (id) => document.querySelector(`.list-group-${id}`)
const trailerContainer = () => document.querySelector(".trailer")
// const infoContainer = () => document.querySelector(".list-group")
// let favButton = document.createElement("button")
// favButton.innerText = "Favorite"

document.addEventListener('DOMContentLoaded', () => {
    fetchMovies();
    fetchActors();
    searchByTitle();
    searchByGenre();
    searchByActor();
    addMovieForm().addEventListener("submit", handleSubmit)

    let resetClick = document.querySelector("#target")
    resetClick.addEventListener("click", resetDom)
})

function fetchMovies(){
    fetch(movieUrl)
    .then(resp => resp.json())
    .then(movieArr => {
        movieArr.forEach(movie => renderMovie(movie))
    })
}

function fetchActors() {
    fetch(actorUrl)
    .then(res => res.json())
    .then(actorArr => {
        actorArr.forEach(actor => renderActor(actor))
    })
}

function renderActor(actor) {
    let list = document.querySelector("#actors")

    let option = document.createElement("option")
    option.innerText = actor.name
    option.value = actor.id

    list.appendChild(option)
}

function handleSubmit(e) {
    e.preventDefault()
    createMovie(e)
}

function createMovie(e) {
    let list = document.querySelector("#actors")
    fetch(movieUrl, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            title: e.target.title.value,
            description: e.target.description.value,
            director: e.target.director.value,
            year: e.target.year.value,
            genre: e.target.genre.value,
            actor: e.target.actors.value,
            favorite: false,
            image: e.target.image.value,
            trailer: e.target.trailer.value
        })
    }).then(res => res.json())
    .then(renderMovie)
    e.target.reset()
}

// const divNode =  document.createElement("div")

function renderMovie(movie){
    let list = document.querySelector("#movie-container")
    let m = document.createElement("div")
    // list.appendChild(m)

    // m.innerText = movie.title
    m.className = (`movie-card-${movie.id}`)
    // m.className = "row row-cols-1 row-cols-md-3"
    

    // let title = document.createElement("h1")
    // title.innerText = movie.title
    // title.className = "title"
    
    // let desc = document.createElement("p")
    // desc.innerText = movie.description
    
    // let dir = document.createElement("h3")
    // dir.innerText = movie.director
    
    // let year = document.createElement("p")
    // year.innerText = movie.year
    
    // let genre = document.createElement("p")
    // genre.innerText = movie.genre

    // m.innerHTML = `
    // <div class="col mb-4">
    //   <div class="card">
    //     <img src="" class="card-img-top" alt="">
    //     <div class="card-body">
    //       <h5 class="card-title">${movie.title}</h5>
    //       <p class="card-text">${movie.description}</p>
    //     </div>
    //   </div>
    // </div>
    // `

    m.innerHTML = `<div class="card" style="width: 18rem;">
    <div class="card-body-${movie.id}">
        <h5 class="movie-title-${movie.id}">${movie.title}</h5>
        <img src="${movie.image}" class="card-img" alt="Space Jam Picture">
    </div>
    <ul class="list-group-${movie.id}">
        <li class="rounded-pill">Director: ${movie.director}</li>
        <hr>
        <li class="rounded-pill">Summary: ${movie.description}</li>
        <hr>
        <li class="rounded-pill">Release Year: ${movie.year}</li>
        <hr>
        <li class="rounded-pill">Genre: ${movie.genre}</li>
        <hr>
        <li class="rounded-pill">Main Actor: ${movie.actors[0].name}</li>
    </ul>
    </div>`

    // <img src="" class="card-img-top" alt="">
    // <h5 class="card-title">${movie.title}</h5>

    // let actorsList = document.createElement("p")
    // actorsList.className = `list-group-${movie.id}`
    // let actors = movie.actors
    // for(i = 0; i < actors.length; i++) {
    //     actor = actors[i]
    //     let a = document.createElement("li")
    //     a.className = "list-group-item"
    //     a.innerText = actor.name
    //     actorsList.appendChild(a)
    // }

    // infoList = document.querySelector(`.list-group-${movie.id}`)
    // debugger
    // // infoList.appendChild(actorsList)
    

    buttonDiv = document.createElement("div")
    buttonDiv.className = `button-${movie.id}`

    let infoBtn = document.createElement('button')
    infoBtn.className = "btn btn-secondary active"
    infoBtn.innerText = "Info"
    infoBtn.addEventListener('click', (e => toggleInfoDisplay(e, movie.id)) )

    let trailerBtn = document.createElement("button")
    trailerBtn.innerText = "Trailer"
    trailerBtn.className = "btn btn-secondary active"
    trailerBtn.addEventListener("click", (e) => handleTrailer(e, movie))
    m.append(trailerBtn)

    let favButton = document.createElement("button")
    favButton.className = "btn btn-secondary active"
    favButton.innerText = "Favorite"
    favButton.addEventListener("click", (e) => handleFavorite(e, movie.id))

    let editButton = document.createElement("button")
    editButton.className = "btn btn-secondary active"
    editButton.innerText = "Edit"
    editButton.addEventListener("click", (e) => editMovie(e, movie.id))

    let deleteButton = document.createElement("button")
    deleteButton.className= "btn btn-secondary active"
    deleteButton.innerText = "Delete"
    deleteButton.dataset.movieId = movie.id
    deleteButton.addEventListener("click", handleDelete)

    buttonDiv.append(infoBtn, trailerBtn, favButton, deleteButton)
    m.appendChild(buttonDiv)
    list.appendChild(m)
    // list.appendChild(m)
   
    infoContainer(movie.id).style.display = "none"
}

function handleTrailer(e, movie) {
    e.preventDefault();
    let mdiv = document.querySelector(".trailer")
    let movieDiv = document.createElement("div")
    movieDiv.className = "trailer1"

    let exitButton = document.createElement("button")
    exitButton.innerText = "Exit"
    exitButton.className = "exit-button"
    exitButton.addEventListener("click", (e) => exitTrailer(e))
    
    // movieDiv.innerHTML = `<iframe width=“560” height=“315" 
    // src=${movie.trailer} frameborder=“0" allow=“accelerometer; 
    // autoplay; encrypted-media; gyroscope; picture-in-picture” allowfullscreen></iframe>`
    
    // all that iframe stuf src=`${movie.youtubeUrl}` rest of ifram stuff

    movieDiv.innerHTML = `<iframe title='YouTube video player' type=\"text/html\" width='890'  
         height='390' src='${movie.trailer}' frameborder='0' 
          allowFullScreen></iframe>`
    
    movieDiv.append(exitButton)
    mdiv.append(movieDiv)
}

function exitTrailer(e) {
    trailerDiv = document.querySelector(".trailer1")
    trailerDiv.remove()

    toggleTrailerDiv()
}

function toggleTrailerDiv() {
    let exitButton = document.querySelector(".exit-button")
    exitButton.remove()

    addTrailer = !addTrailer
    if(addTrailer) {
        trailerContainer().style.display = "block"
    } else {
        trailerContainer().style.display = "none"
    }
}

function toggleInfoDisplay(e, id) {
    addInfo = !addInfo
    if (addInfo) {
      infoContainer(id).style.display = "block"
    } else {
      infoContainer(id).style.display = "none"
    }
}

function handleTitleButton() {
    document.querySelector
}

function handleDelete(e) {
    let movieId = e.target.dataset.movieId
    deleteMovie(movieId)
}

function deleteMovie(id) {
    fetch(movieUrl + "/" + id, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
      //pessimistic render
        document.querySelector(`.movie-card-${id}`).remove()
    })
    .catch((error)=>{
        alert("error with the server:" + error.message)
    })
}

function editMovie(e, id) {
    // document.querySelector(`.movie-card-${id}`).remove()
    // list = document.querySelector(".movie-list")


}

function handleFavorite(e, id) {
    fetch(movieUrl + "/" + id, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            favorite: true
        })
    }).then(res => res.json())
    .then(movie => favMovie(movie, e))
}

function favMovie(movie, e) {
    let container = document.querySelector("#fav-container")
    let favList = document.createElement("h5")

    let title = e.target.parentElement.parentElement.querySelector(`.movie-title-${movie.id}`).innerText

    let listItem = document.createElement("h3")
    listItem.innerText = title

    let removeButton = document.createElement("button")
    removeButton.innerText = "Remove"
    removeButton.className = "btn btn-secondary active"
    removeButton.addEventListener('click', (e) => handleRemove(e, movie.id))
    
    listItem.appendChild(removeButton)
    favList.appendChild(listItem)

    container.appendChild(favList)
    e.target.remove()
}

function handleRemove(e, id) {
    fetch(movieUrl + "/" + id, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            favorite: false
        })
    }).then(res => res.json())
    .then(removeFav(e, id))
}

function removeFav(e, id){
    e.target.parentElement.remove()
    let movie = document.querySelector(`.movie-card-${id}`)
    
    let favButton = document.createElement("button")
    favButton.innerText = "Favorite"
    favButton.className = "btn btn-secondary active"
    favButton.addEventListener("click", (e) => handleFavorite(e, id))

    movie.appendChild(favButton)
}

// Search functions

function searchByTitle() {
    let titleForm = document.querySelector(".title-form")
    titleForm.addEventListener("submit", (e) => handleTitleSearch(e))
}

function handleTitleSearch(e) {
    e.preventDefault()
    fetch(movieUrl)
    .then(res => res.json())
    .then(movieArray => checkTitle(e, movieArray))
}

function checkTitle(e, array) {
    let input = document.querySelector("#title-input").value
    let container = document.querySelector("#movie-container");
    container.innerHTML = ''
    for(var i = 0; i < array.length; i ++) {
        let movie = array[i];
        if (movie.title === input) {
            renderMovie(movie);
        }
    }
    e.target.reset()
}

function searchByGenre() {
    let genreForm = document.querySelector(".genre-form")
    genreForm.addEventListener("submit", (e) => handleGenreSearch(e))
}

function handleGenreSearch(e) {
    e.preventDefault()
    fetch(movieUrl)
    .then(res => res.json())
    .then(movieArray => checkGenre(e, movieArray))
}

function checkGenre(e, array) {
    let input = document.querySelector("#genre-input").value
    let container = document.querySelector("#movie-container");
    container.innerHTML = ''
    for(var i = 0; i < array.length; i ++) {
        let movie = array[i];
        if (movie.genre === input) {
            renderMovie(movie)
        }
    }
    e.target.reset()
}

function searchByActor() {
    let actorForm = document.querySelector(".actor-form")
    actorForm.addEventListener("submit", (e) => handleActorSearch(e))
}

function handleActorSearch(e) {
    e.preventDefault()
    fetch(movieUrl)
    .then(res => res.json())
    .then(movieArray => checkActor(e, movieArray))
}

function checkActor(e, array) {
    let input = document.querySelector("#actor-input").value
    let container = document.querySelector("#movie-container");
    container.innerHTML = ''
    for(var i = 0; i < array.length; i ++) {
        let movie = array[i];
        let actors = movie.actors
        for(var j = 0; j < actors.length; j++) {
            actor = actors[j]
            if (actor.name === input) {
                renderMovie(movie);
            }
        }
    }
    e.target.reset()
}

function resetDom(){
    location.reload()
  }
  

// function checkTitle(array) {
//     // debugger
//     var input, filter, a, i,
//     input = document.querySelector("#title-input");
//     filter = input.value.toUpperCase();
//     for (i = 0; i < array.length; i++) {
//         a = array[i].title[0];
//         // 
//         if (a.toUpperCase().indexOf(filter) > -1) {
//             array[i].style.display = "";
//         } else {
//             array[i].style.display = "none";
//         }
//     }
// }

// function checkTitle(array, input) {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }


// $(function() {
//     $('.luminaire:nth-child(2n)').addClass('on');
//     $('.luminaire').on('click', function() {
//       $(this).toggleClass('on');
//     });
//   });