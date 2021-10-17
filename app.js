import Book from './book.js';
import generateRandomID from './generateRandomID.js';

// Module pattern

let library = [
    new Book(generateRandomID(), 'Sands of time', 900, 'Sidney Sheldon', true),
    new Book(generateRandomID(), 'Wind of Victory', 550, 'Henry Baumer', true),
    new Book(generateRandomID(), 'Things fall apart', 890, 'Chinua Achebe', true),
    new Book(generateRandomID(), 'Purple Hibiscus', 890, 'Chimamanda', true),
    new Book(generateRandomID(), 'Bible', 5000, 'God', true),
];

const showbookStatus = () => {
    library.forEach(book => {
        if (book.isAvailable) {
            console.log(`${book.name} is Available on the shelf`);
        } else {
            console.log(`${book.name} has been borrowed`);
        }
    })
}

const borrowBook = (name) => {
    let book = library.find(book => book.name === name);

    if (!book) {
        console.log('We do not have this book. Please check back');
        return
    }

    if (book.isAvailable) {
        book.lendBook()
    } else if (book.isAvailable === false) {
        console.log('This book has been taken by another reader');
    } 

    let newLibrary = library.filter(book => book.name !== name);
    newLibrary.push(book);
    library = newLibrary;
    console.log(`${book.name} has been borrowed`);
}

const recieveBook = (name) => {
    let book = library.find(book => book.name === name);

    if (!book) {
        console.log('We did not lend you this book. You probably took it off another library');
        return
    }

    if (book.isAvailable === false) {
        book.returnBook();
    } else {
        console.log('You have already returned this book before');
    }

    let newLibrary = library.filter(book => book.name !== name);
    newLibrary.push(book);
    library = newLibrary;
    console.log(`${book.name} has been returned and is now available`);
}


borrowBook('Wind of Victory')
borrowBook('Bible')
recieveBook('Wind of Victory')
console.log(library);