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
// app.get('/homepage', (req, res) => res.render('index', {
//     tab: 'HOMEPAGE | BOOKS',
//     title: 'Hey there! Look for a book?'
// }));
const errme = {
    nomo: 'INTERNAL ERROR, WE WILL FIX IT SOON. STAY CALM',
    mama: 'Our team is working on this issue',
    numbum: 500
}
app.get('/homepage', (req, res) => {
    try {
        res.render('index', {
            tab: 'HOMEPAGE | BOOKS'
        })
    } catch (error) {
        res.status(500).send(`
            <div style="text-align: center; margin-top: 10%; background: black; color: white;">
                <h1 style="font-size: 10rem;">"${errme.numbum}"</h1>
                <p>${errme.nomo}</p>
                <h4>${errme.mama}</h4>
                <a href='https://www.google.com/' target="_blank" rel="noopener noreferrer" style="background: red; padding: 1rem;">Troubleshoot</a>
            </div>
        `)
    }
});

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