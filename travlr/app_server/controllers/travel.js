//Read tips data from JSON file
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));


/*Get Travel View */
const travel = (req, res) => { 
    res.render('travel', { title: "Travlr Gateways",  trips});
};

module.exports = {
    travel
};

