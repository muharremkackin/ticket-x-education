class Theater{

    static all = []

    constructor(data){
        this.data = data
        this.movies = this.data.movies.map(movie => new Movie(movie))
        this.constructor.all.push(this)
    }

    renderShow = () => {
        const { id, name, adress, city, state, phone, image } = this.data
        document.getElementById("theater").innerHTML =`
        <div class="theater-card" data-id=${id}>
        <img src=${image} alt=${id}/>
        <p class="title">Theather: ${name}</p>
        <p>Adress: ${adress}</p>
        <p>City: ${city}</p>
        <p">State: ${state}</p>
        <p>Phone: ${phone}</p>
        <div class="contain" data-container="movies"></div>
        <button id="go-back">Go Back</button>
        `
        document.getElementById('go-back').addEventListener('click',Theater.renderTheaterIndex)
        this.movies.forEach(movie => movie.renderCard())

        Movie.renderMoviePage()
    }

    renderTheaterCard = () => {
        const { id, name, adress, city, state, phone, image } = this.data
       document.getElementById("theater-container").innerHTML += `
       <div class="theater-card" data-id=${id}>
       <img src=${image} alt=${id}/>
       <p class="title">Theather: ${name}</p>
       <p>Adress: ${adress}</p>
       <p>City: ${city}</p>
       <p">State: ${state}</p>
       <p>Phone: ${phone}</p>
       
       </div>`
    }

    static find = (id) => this.all.find(theater => theater.data.id == id)

    static handleIndexClick = (e) => {
        if (e.target.tagName == 'IMG' || e.target.classList.contains('title')){
            const id = e.target.closest(".theater-card").dataset.id
            this.find(id).renderShow()
        }
    }

    static renderTheaterIndex = () => {

        const theaterContainer = document.createElement("div")
        theaterContainer.id = "theater-container"
        const theatherId = document.getElementById("theater")
        theatherId.innerHTML = ""
        theatherId.appendChild(theaterContainer)
        this.all.forEach(theater => theater.renderTheaterCard())
        theaterContainer.addEventListener('click' , this.handleIndexClick)
    }

    static getTheaters = () => {
        
        api.getTheaters().then(theaters => {
        theaters.forEach(theater => new Theater(theater))
        this.renderTheaterIndex()
        
        })

    }




}
