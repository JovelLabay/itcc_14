# THESE ARE THE INSTRUCTIONS YOU NEED TO FOLLOW IN ORDER TO RUN IT IN YOUR LOCAL COMPUTER

## INSTALLATION

1. Open cmd and type `node -v` | This is to check if you have node in your computer installed.
2. Type `npm init` to initialize the package.
3. Type `npm i express` to install all node modules in your computer.
3. type `npm i handlebars` to install the template engine to render the dynamic webpages.

### TO RUN THE SERVER

- You do not have to initalize the package because it is already there.
- `npm run server.js`

### I SUGGEST DO NOT USE THE REST CLIENT EXTENSION IN THE VS CODE

- Use [POSTMAN](https://www.postman.com) to execute these http request and responses.
    * **GET** *http://localhost/3000/routes*
    * **POST** *http://localhost/3000/routes*
        ```
            {
                "id": 01,
                "bookName": "The Sample Book",
                au"thor: "Juan Luna",
                "publisher": "Xavier University",
                "isbn": 11111,
                "datePublish": "MM DD YYYY"
            }
        ```
    * **PUT** *http://localhost/3000/routes/:id*
        ```
            {
                "bookName": "The Sample Book",
                "publisher": "Xavier University",
            }
        ```
    * **DELET** *http://localhost/3000/routes/:id*

### I SUGGEST ALSO TO USE JSON PARSE THAT FORMATS THE JSON FILE

- Preferred browser to use are browsers that uses V8 javascript engine:
    1. Chrome
    2. Edge
- Download this extension [JSON VIWER](https://chrome.google.com/webstore/detail/djson-json-viewer-formatt/chaeijjekipecdajnijdldjjipaegdjc?hl=en-US)
