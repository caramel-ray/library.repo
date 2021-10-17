class Book {
    constructor (id, name, pages, author, isAvailable) {
        this.id = id;
        this.name = name;
        this.pages = pages;
        this.author = author;
        this.isAvailable = isAvailable
    }

    lendBook () {
        this.isAvailable = false;
    }

    returnBook () {
        this.isAvailable = true;
    }
}

export default Book