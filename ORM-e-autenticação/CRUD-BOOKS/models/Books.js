'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define('books', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE // Bônus: Adicione, também, uma data de update nos atributos do livro que se altera sempre que o livro for atualizado.
  });

  return books;
};