/*Get Travel View */
const travel = (req, res) => {
    res.render('travel', { title: "Travlr Gateways" });
};

module.exports = {
    travel
};

