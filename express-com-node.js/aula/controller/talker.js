const fs = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const data = await fs.readFile('tal.json');
    res.status(200).json(JSON.parse(data));
  } catch (e) {
    next(e);
  }
};
