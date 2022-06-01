const express = require('express')
const cors = require('cors')
const port = 4000
const app = express()

app.use(cors())

// main server page of "/"

app.get('/', (req, res)=>{
    res.send('/ is working ')

})



//routes




// connects to server at port 4000
app.listen(port, ()=> console.log(`server is listening on ${port}`))
