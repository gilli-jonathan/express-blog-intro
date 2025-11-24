const express = require ('express')
const app = express()
const PORT = 3000 

const array = [ 
    {
        titolo:,
        contenuto: ,
        immagine: ,
        tags : []
    },
     {
        titolo:,
        contenuto: ,
        immagine: ,
        tags : []
    },
     {
        titolo:,
        contenuto: ,
        immagine: ,
        tags : []
    },
     {
        titolo:,
        contenuto: ,
        immagine: ,
        tags : []
    },
     {
        titolo:,
        contenuto: ,
        immagine: ,
        tags : []
    }
]

app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`);  
})

app.get('/', (req, res)=> {

    console.log(req.query);

    res.send('SERVER DEL MIO BLOG')
})
