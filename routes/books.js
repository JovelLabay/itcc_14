const express = require('express')
const router = express.Router();
const books = require('../books')

// BOOK GET | REGULAR GET REQUEST
router.get('/', (req, res) => {
    try {
        res.send(books)
    } catch (err) {
        res.status(400).json({
            errorMessage: "404 Error"
        })
    }
})

// GET BOOK ONLY
router.get('/:id', (req, res) => {
    if (books.some(books => books.id === parseInt(req.params.id))) {
        res.json(books.filter(books => books.id === parseInt(req.params.id)))
    } else {
        res.status(417).send(`THAT IS NOT EXISTING ${req.params.id}`)
    }
})

// BOOK POST
router.post('/', (req, res) => {
    const newBooks = {
        id: books.length + 1,
        bookName: req.body.bookName,
        author: req.body.author,
        publisher: req.body.publisher,
        isbn: req.body.isbn,
        datePublish: req.body.datePublish
    }

    if (!newBooks.isbn) {
        console.log("ISBN IS REQUIRED")
        return res.status(400);
    }

    books.push(newBooks);
    // INSTEAD OF TO RETURN JSON WE WILL REDIRECT BACK TO THE FORM
    // res.json(books)
    res.redirect('/prempage')
})

// PUT BOOK
router.put('/:id', (req, res) => {
    if (books.some(books => books.id === parseInt(req.params.id))) {
        const updatedBooks = req.body;
        books.forEach(books => {
            if (books.id === parseInt(req.params.id)) {
                books.bookName = updatedBooks.bookName ? updatedBooks.bookName : books.bookName;
                books.publisher = updatedBooks.publisher ? updatedBooks.publisher : books.publisher;
                res.send('BOOK DETAILS HAS BEEN UPDATED')
                res.send(updatedBooks)
            }
        });
    } else {
        res.status(417).send(`THAT IS NOT EXISTING ${req.params.id}`)
    }
})

// BOOK DELETE
router.delete('/:id', (req, res) => {
    if (books.some(books => books.id === parseInt(req.params.id))) {
        res.json({
            messsgae: "DELETED",
            books: books.filter(books => books.id !== parseInt(req.params.id))
        });
    } else {
        res.status(417).send(`THAT IS NOT EXISTING ${req.params.id}`)
    }
})

module.exports = router