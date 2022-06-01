const express = require('express')
const cors = require('cors')
const port = 4000
const app = express()

app.use(cors())

// main server page of "/"

app.get('/', (req, res)=>{
    // res.send('/ is working ')
    fetch('https://serpapi.com/search.json?engine=google&q=Coffee&google_domain=google.com&gl=uk&hl=en&num=10&api_key=64dee81450e011179f21e323a3eaed6743f56bbcfe6386372c5977677934d5bc')
    .then(r => r.json())
    .then(data => res.send(data['organic_results']))
})

//routes




// connects to server at port 4000
app.listen(port, ()=> console.log(`server is listening on ${port}`))
