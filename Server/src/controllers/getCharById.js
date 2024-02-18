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

// const getCharById = (res, id) => {
//     console.log("entreeee");

//     const apiUrl = `https://rickandmortyapi.com/api/character/${id}`;
//     // const apiUrl = `https://rym2.up.railway.app/api/character/${id}`;
//     axios
//         .get(apiUrl)
//         .then((response) => {
//         const character = {
//             id: response.data.id,
//             name: response.data.name,
//             status: response.data.status,
//             species: response.data.species,
//             gender: response.data.gender,
//             origin: response.data.origin,
//             image: response.data.image
//         };
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.write(JSON.stringify(character));
//         res.end();
//     })
//     .catch((error) => {
//         res.writeHead(500).contentType("text/plain").send(error.message);
//     });
// };

// module.exports = getCharById;
