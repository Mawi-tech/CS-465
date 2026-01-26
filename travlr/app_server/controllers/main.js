
const index = (req, res) => {
    res.render('index', { title: "Travlr Gateway" });
};

module.exports = {
    index
};

