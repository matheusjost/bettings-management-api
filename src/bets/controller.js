const pool = require('../../db');
const querries = require('./querries');

// selects all the selections on the database
const getBets = (req, res) => {
    pool.query(querries.getBets, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

// selects all the selections with the id received on the url
const getBetByID = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(querries.getBetByID, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

// unpacks the req body into the variables 
// and send it to the insert querry
const addBet = (req, res) => {
    const { event, selection, stake, odds, status, date } = req.body;
    pool.query(querries.addBet, [event, selection, stake, odds, status, date], (error, results) => {
        if (error) throw error;
        res.status(201).send({ message: `selection added to your bookings!`});
    })
}

// selects all the selections with the 
// id received on the url and delete it
const deleteBet = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(querries.getBetByID, [id], (error, results) => {
        const noBetFound = !results.rows.length;
        if (noBetFound){
            res.send({ message: `${req.params.id} doesn't exist on your bookings. couldn't remove it.`});
        }
        pool.query(querries.deleteBet, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send({ message: `${req.params.id} selection removed from your bookings.` })
        })
    })
}

// selects all the selections with the id 
// received on the url and update with stake, 
// odds and status info unpacked from the req body
const updateBet = (req, res) => {
    const id = parseInt(req.params.id);
    const { stake, odds, status } = req.body;

    pool.query(querries.getBetByID, [id], (error, results) => {
        const noBetFound = !results.rows.length;
        if (noBetFound){
            res.send({ message: `${req.params.id} doesn't exist on your bookings. couldn't update it.`});
        }
        pool.query(querries.updateBet, [id, stake, odds, status], (error, results) => {
            if (error) throw error;
            res.status(200).send({ message: `${req.params.id} selection updated on your bookings.`})
        })
    })
}

module.exports = {
    getBets,
    getBetByID,
    addBet,
    deleteBet,
    updateBet,
}