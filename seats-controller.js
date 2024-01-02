import Model from './seats-model.js'

class Controller {

    constructor() {

        this.model = new Model();

    }

    loadSeatsFromBackend() {
        return this.model.loadSeatsFromBackend()
    }

    getSeats() {
        return this.model.getSeats();
    }

    selectSeat(i){
        this.model.selectSeat(i)
    }

    bookSeats() {
        this.model.bookSeats()
    }

}

export default Controller;