const { Sequelize,DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
      //autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
    },
    healthyness: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
    },
    steps: {
      type: DataTypes.TEXT
    },   
  });
};

