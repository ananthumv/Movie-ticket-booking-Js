class Model {
    constructor() {

        this.contacts = []

    }

    getContacts() {
        return this.contacts;
    }

    setContacts(contact) {

        this.contacts.push(contact)



    }

}

export default Model;