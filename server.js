// IMPORT OF ALL MODULES NEEDED
const express = require('express')
const exphbs = require('express-handlebars')
const books = require('./books')
const path = require('path')
const app = express()

// HANDLEBARS HTML
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// SET STATIC FOLDER FOR CSS
app.use(express.static(path.join(__dirname, '/styles')))

// BODY MIDDLEWARE THAT RETURN THE OUTPUT FROM THE REQ VERBS
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

// FOR THE ERROR
const theError = {
    theDescription: 'Cannot Access the web service!',
    theNumber: 500,
    theTeam: 'The team is under investigation of the current issue.',
    theAccounce: 'For more information go to'
}
app.get('/homepage', (req, res) => {
    try {
        res.render('index', {
            tab: 'HOMEPAGE | BOOKS',
            title: 'Hey there! Look for a book?'
        })
    } catch (error) {
        res.status(500).send(`
            <div style="text-align: center;">
                <h6 style="font-size: 50px;">${theError.theDescription}</h6>
                <h1 style="font-size: 100px;">:(${theError.theNumber}</h1>
                    <div style='border: 2px solid red; margin: 0 20rem;'>
                        <p>${theError.theTeam}</p>
                        <samp>${theError.theAccounce} <a href='https//www/google.com'>Google</a></samp>
                    </div>
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
    layouts: 'main',
    books,
    booktile,
    tab: "FREEPAGE | BOOKS"
}));

app.get('/prempage', (req, res) => res.render('index3', {
    layouts: 'main',
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