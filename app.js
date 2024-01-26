import express from "express";
import animalsRouter from "./routes/animals.js";

const app = express();
const port = 8000;

//to load router in app call .use method
app.use('/animals', animalsRouter)

app.get('/', (req, res) => {
    //to retrieve data and sending html response
    res.send('<h1>Adopt a pet!</h1>\
                <p>Browse through your new furry friends:</p>\
                <ul>\
                <li><a href="/animals/dogs" style="text-decoration: none;">Dogs</a></li>\
                <li><a href="/animals/cats" style="text-decoration: none;">Cats</a></li>\
                <li><a href="/animals/rabbits" style="text-decoration: none;">Rabbits</a></li>\
                </ul>\
                <style> ul { list-style-type: none;} </style>') 
})

//using template literal to pass variable
//binds server to port 8000
app.listen(port, () => {
    console.log(`Pets server running on port ${port}`)
})
