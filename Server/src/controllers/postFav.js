const { Favorite } = require("../../DB_connection");

const postFav = async (req, res) => {
  const {id, name, status, species, gender, origin, image } = req.body;
  if (!id || !name || !status || !species || !gender || !origin || !image) {
    return res.status(400).json({ message: "Faltan datos" });
  }
  try {
    const [favorite, created] = await Favorite.findOrCreate({
      where: { id: id },
      defaults: {id: id, name: name, status: status, species: species, gender: gender, origin: origin, image: image },
    })
    console.log(`Favorito encontrado o creado: ${favorite.id}`);
    console.log(`¿Fue creado nuevo? ${created}`);

    const favorites = await Favorite.findAll();
    console.log(`Favoritos:`, favorites);
    
    return res.status(200).json({ favoritos: favorites });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = postFav;