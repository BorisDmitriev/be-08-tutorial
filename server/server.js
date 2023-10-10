import express from "express"
import cors from "cors"

import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const app = express()

app.use(cors())

// path to current folder
const __filename = fileURLToPath(import.meta.url) 
const __dirname = dirname( __filename )

//Server the static files from the React app
app.use( express.static( join( __dirname, '/../client/dist' ) ) )

//An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
    const list = ["item1", "item2", "item3"]
    res.json(list)
    console.log('Sent list of items');
})

// Hadles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(join(__dirname + '/../client/dist/index.html'))
})


const port = process.env.PORT || 5000;
app.listen(port, ()=> {
    console.log('App is listening on port ' + port);
});

