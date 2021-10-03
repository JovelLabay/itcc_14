// IMPORT OF ALL MODULES NEEDED
const express = require('express')
const exphbs = require('express-handlebars')
const books = require('./books')

const app = express()

// HANDLEBARS HTML
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.engine('handlebars', exphbs({
    defaultLayout: 'main2'
}));
app.engine('handlebars', exphbs({
    defaultLayout: 'main3'
}));

app.set('view engine', 'handlebars');

// BODY MIDDLEWARE THAT RETURN THE OUTPUT FROM THE REQ VERBS
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

// RENDER HANDLEBARS IN HTML
// THIS IS FOR THE HOMEPAGE
app.get('/homepage', (req, res) => res.render('index', {
    tab: 'HOMEPAGE | BOOKS',
    title: 'Hey there! Look for a book?'
}));

const booktile = {
    bname: 'Book Name',
    bauthor: 'Author',
    bpublisher: 'Publisher',
    bisbn: 'ISBN',
    bdate: 'Date Published'
}

app.get('/freepage', (req, res) => res.render('index2', {
    tab: 'FREEPAGE | BOOKS',
    titleLogo: 'This is the public API',
    learn: 'Since, this is a public API. You can only view the book table',
    books,
    booktile,
}));

app.get('/prempage', (req, res) => res.render('index3', {
    tab: 'PREMIUMPAGE | BOOKS',
    titleLogo: 'This is the premium API',
    learn: 'Since, this is a premium API. You have all the access of the API.',
    books,
}))

// ROUTES FOR API TERMINAL
app.use('/routes', require('./routes/books'))

// CONNECTION FOR THE SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})