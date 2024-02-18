let myFavorites = [];

const postFavorites = (req, res) => {
  const { character } = req.body;

  myFavorites.push(character);

  res.json(myFavorites);
};

const deleteFavorites = (req, res) => {
  const id = req.params.id;

  myFavorites = myFavorites.filter((character) => character.id !== id);

  res.json(myFavorites);
};

module.exports = { postFavorites, deleteFavorites };
