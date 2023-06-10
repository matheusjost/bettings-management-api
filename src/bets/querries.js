const getBets = "SELECT * FROM bets";
const getBetByID = "SELECT * FROM bets WHERE id = $1";
const addBet = "INSERT INTO bets (event, selection, stake, odds, status, date) VALUES ($1, $2, $3, $4, $5, $6)";
const deleteBet = "DELETE FROM bets WHERE id = $1";
const updateBet = "UPDATE bets SET stake = $2, odds = $3, status = $4 WHERE id = $1";

module.exports = {
    getBets,
    getBetByID,
    addBet,
    deleteBet,
    updateBet,
}