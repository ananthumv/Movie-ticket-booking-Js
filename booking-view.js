import Controller from "./booking-controller.js";

const controller = new Controller();

const form = document.getElementById('contact-details')
const name = document.getElementById('name')
const email = document.getElementById('email')
const number = document.getElementById('number')
const button = document.getElementById('button')

    form.addEventListener('submit', (e) => {
    e.preventDefault();
    controller.setContacts(name.value, email.value, number.value)
    form.reset()
    render()
})

function render() {
    const contacts = controller.getContacts()
    console.log(contacts)
}

