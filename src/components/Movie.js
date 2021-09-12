class Movie {

    static all = []

    constructor(data) {
        this.data = data
        this.constructor.all.push(this)
    }

    renderMovie = () => {
        const { id, movieName, releaseDate, movieDetail, movieImage, stars, director, genres, runtime } = this.data
        document.getElementById("theater").innerHTML = `
                                <div class="movie-card" data-id=${id}>
                                    <img src=${movieImage} alt=${id}/>
                                    <p class="movie-name">Movie: ${movieName}</p>
                                    <p class="">Genre: ${genres}</p>
                                    <p class=""> Movie Stars: ${stars}</p>
                                    <p class="">Duration: ${runtime}</p>
                                    <p class="">Director: ${director}</p>
                                    <p class="">Year: ${releaseDate}</p>
                                    <p class="">Detail: ${movieDetail}</p>
                                    <button id="go-back">Go Back</button>
                                </div>`

        // document.getElementById('go-back').addEventListener('click', Movie.renderMovieIndex)
    }

    renderCard = () => {
        const { id, movieName, releaseDate, movieDetail, movieImage, stars, director, genres, runtime } = this.data
        document.querySelector(".contain").innerHTML += `
            <div class="movie-card" data-id="${id}">
            <img src=${movieImage} alt=${id}/>
            <p class="title">Movie: ${movieName}</p>
            <p class="title">Genre: ${genres}</p>
            <p class="title"> Movie Stars: ${stars}</p>
            <p class="title">Duration: ${runtime}</p>
            <p class="title">Director: ${director}</p>
            <p class="title">Year: ${releaseDate}</p>
            <p class="title">Detail: ${movieDetail}</p>
        </div>`
      
    }

    static find = (id) => this.all.find(movie => movie.data.id == id)

    static handleIndexMovieClick = (e) => {
        console.log(e)
        if (e.target.tagName == "IMG" || e.target.classList.contains("movie-name")) {
            const id = e.target.closest(".movie-card").dataset.id
            this.find(id).renderMovie()
        }

    }


    static renderMovieIndex = () => {
        const movieContain = document.querySelector('[data-container="Movies"]');
        movieContain.children.forEach(element => {
            console.log(element);
        });
        // console.log(movieContain)
        // movieContain.addEventListener("click", this.handleIndexMovieClick)
    }


    static renderMoviePage = () => {
        document.querySelectorAll('.movie-card[data-id]').forEach(element => {
            element.addEventListener('click', function() {
                document.getElementById("theater").innerHTML = '';
                document.getElementById("theater").appendChild(this);
            })
        })
    }
    
}


