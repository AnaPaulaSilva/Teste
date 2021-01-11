module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      cpf: DataTypes.INT,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      cep: DataTypes.INT,
      rua: DataTypes.STRING
    });
  
    return User;
  }