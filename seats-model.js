class Model {
    constructor() {

        this.seats = [];

    }

    async loadSeatsFromBackend() {
        const data = await fetch('http://localhost:3000/seats')
        const seats = await data.json()
        this.seats = seats.map(seat => {
            if(seat === true) {
                return 'booked'
            }else{
                return 'available'
            }
        })
        return true;
    }

    getSeats () {
        return this.seats;
    }

    selectSeat(i) {

        // console.log(this.seats[i])

        if (this.seats[i] === 'available') {
            this.seats[i] = 'selected'
            console.log("selected")

        }else if(this.seats[i] === 'selected'){
            this.seats[i] = 'available'
            console.log("available")
        }
    }
    
    bookSeats() {

        let selectedSeats = []

        this.seats.forEach((seat, i) => {
            if (seat === 'selected') {
                
                selectedSeats.push(i)

                console.log(selectedSeats)
                 
            }
        })

        localStorage.setItem('seats', JSON.stringify(selectedSeats))
        
        console.log(localStorage.getItem('seats'))
        
    }
}

export default Model;
