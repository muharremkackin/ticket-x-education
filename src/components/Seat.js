class Seat{
    static renderSeats = () => {
        this.renderScreen()
        this.renderSeat()
        this.renderSeat()
        this.renderSeat()
        this.renderSeat()
        this.renderSeat()
        this.renderSeat()
        this.renderSeat()
        this.renderSeat()
        this.renderSeat()
        this.renderSeat()
        this.renderSeat()
        this.renderSeat()
        this.renderSeat()
        this.renderInfo()
    }

    
    static renderSeat = () => {
        const seatContainer = document.createElement("div")
        seatContainer.id = "row"
        document.getElementById("container").appendChild(seatContainer)
        seatContainer.innerHTML += `
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        `
    }

    static renderScreen = () => {
        const screenContainer = document.createElement("div")
        screenContainer.id = "screen"
        document.getElementById("container").appendChild(screenContainer)
    }

    static renderInfo = () => {
        const infoContainer = document.createElement("ul")
        infoContainer.className = "info"
        document.getElementById("container").appendChild(infoContainer)
        infoContainer.innerHTML += `
        <li class= "li"><div class="seat-container"><div class="seat"></div><span>Empty</span></div></li>
        <li class= "li"><div class="seat-container"><div class="seat reserved"></div><span>Reserved</span></div></li>
        <li class= "li"><div class="seat-container"><div class="seat selected"></div><span>Selected</span></div></li>
        `
        this.renderMovieList()
    }

    static renderMovieList = () => {
        const movieList = document.createElement("div")
         movieList.className = "movie-list"
         document.getElementById("container").appendChild(movieList)
         movieList.innerHTML += ` <select id="movie">
         <option disabled>Movies</option>
         <option value="20">Jungle Cruise</option>
        </select>`
        this.renderP()
     }


    static renderP = () => {
        const pContainer = document.createElement("p")
        pContainer.id = "text"
        document.getElementById("container").appendChild(pContainer)
        pContainer.innerHTML += `
       <p> <span id="count">1</span> Seats Price is $<span id="amount">0</span></p>
       `
        this.renderClick()
    }

    static renderClick = () => {
        const container = document.querySelector('#container')
        container.addEventListener('click' , (e) => {
            if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
                e.target.classList.toggle('selected');
                this.renderCalculate()
            };
        })
        
    }

    static renderCalculate = () => {
        const amount = document.getElementById('amount')
        const select = document.getElementById('movie')
        let selectedSeatCount = container.querySelectorAll('.seat.selected').length-1 ;
        let price = select.value
        amount.innerText = selectedSeatCount*price
        this.renderCount()
       
    }

    static renderCount = () => {
        const count = document.getElementById('count')
        let selectedSeatCount = container.querySelectorAll('.seat.selected').length-1 ;
        count.innerText = selectedSeatCount
         
    }


    
    







    
        
    
        
    
}
    
