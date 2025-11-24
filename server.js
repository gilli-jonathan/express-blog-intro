const express = require ('express')
const app = express()
const PORT = 3000 

app.use(express.static('public'))

const post = [ 
    {
        titolo: "il ciambellone",
        contenuto: "sarà un torta? sarà una ciambella? è tutte e due le cose",
        immagine: "/img/ciambellone.jpeg",
        tags : ['budino','cioccolato','gelato','scimmia', 'idraulico', 'pollice']
    },
     {
        titolo:'the cracker, il ritorno',
        contenuto: 'the creacker la vendetta',
        immagine: "/img/cracker_barbabietola.jpeg",
        tags : ['gelato','budino','cioccolato','scimmia', 'idraulico', 'pollice']
    },
     {
        titolo:'sono stanco',
        contenuto: 'voglio andare via e parlare con la mia socia',
        immagine: "/img/pane_fritto_dolce.jpeg",
        tags : ['budino','cioccolato','scimmia', 'gelato','idraulico', 'pollice']
    },
     {
        titolo:'pasta e verdura messe insieme??',
        contenuto: 'idea folle, meglo pasta e carne messi insieme',
        immagine: "/img/pasta_barbabietola.jpeg",
        tags : ['budino','gelato','cioccolato','scimmia', 'idraulico', 'pollice']
    },
     {
        titolo:'la miglior torta in circolazione!!?',
        contenuto: 'non questa, anzi una torta triste da mangiare bevento un tè triste',
        immagine: "/img/torta_paesana.jpeg",
        tags : ['budino','cioccolato','scimmia', 'idraulico','gelato','pollice']
    }
]

app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`);  
})

app.get('/', (req, res)=> {
   
    res.send('SERVER DEL MIO BLOG')
})

app.get('/bacheca', (req, res)=> {

    res.json({post})
})

