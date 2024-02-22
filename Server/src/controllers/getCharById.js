const axios = require("axios");
const apiUrl = `https://rickandmortyapi.com/api/character/`;

const getCharById = async (req, res) => {
    const ID = req.params.id;
    try {
        const response = await axios(`${apiUrl}${ID}`);

        const { id, name, status, species, origin, gender, image } = response.data;

        const character = {
        id,
        name,
        status,
        species,
        origin,
        gender,
        image,
        };

        return res.status(200).json(character);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = getCharById;