const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const user = await User.findAll();

    return res.json(user);
  },
  async store(req, res) {
    const { name, email } = req.body;

    const user = await User.create({ name, email });

    return res.json(user);
  },
  async updateUser(req, res) {
    try {
      const { id } = req.params;

      const { name, email } = req.body;

      const user = await User.findOne({ where: { id } });

      if (!user) {
        res.status(401).json({ message: "Nao foi encontrado!" });
      } else {
        const user = await User.update(
          { name, email },
          { where: { id } }
        );

        res.status(200).json({user});
      }
    } catch (error) {
        res.status(401).json({ error })
    }
  },
};
