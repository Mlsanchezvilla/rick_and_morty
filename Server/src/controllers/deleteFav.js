const { Favorite } = require("../../DB_connection");

const deleteFav = async (req, res) => {
  const {id} = req.params;
  try {
    await Favorite.destroy({
      where: { id: id },
    })
    const favorites = await Favorite.findAll();
    console.log(`Favoritos:`, favorites);
    return res.status(200).json({ favoritos: favorites });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = deleteFav;