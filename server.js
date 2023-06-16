const express = require('express');
const betsRoutes = require('./src/bets/routes')
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("...");
})

app.use('/api/v1/bets', betsRoutes);

app.listen(port, () => console.log(`RUNNING APP ON ${port}`))