const listCities = async(req, res) => {
        try {
            const cities = await require('../RussiaCities.json')
            res.status(200).json(cities)
        }
        catch(error) {
            console.error(error);
            res.status(500).json([])
        }
}

module.exports = { listCities }



