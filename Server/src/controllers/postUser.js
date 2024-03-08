const { User } = require("../../DB_connection");

const postUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Faltan datos" });
  }
  try {
    User.findOrCreate({
      where: { email: email },
      defaults: { email: email, password: password },
    })
      .then(([user, created]) => {
        console.log(`Usuario encontrado o creado: ${user.email}`);
        console.log(`¿Fue creado nuevo? ${created}`);
      })
      .catch((err) => {
        console.error("Error al buscar o crear usuario:", err);
      });
    return res.status(200).json({ message: "Usuario creado" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = postUser;
