class ApiService {

    constructor(api){
       this.api = api
    }

    getTheaters = () => fetch(this.api + "/theaters").then(resp => resp.json())
    getMovies = () => fetch(this.api + "/movies").then(resp => resp.json())
    

 }