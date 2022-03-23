module.exports =   (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: 'Usuario não autorizado' })
  }

  if (req.headers.authorization !== 'senha') {
    return res.status(401).send({ message: 'Senha incorreta' })
  }

  next();
};