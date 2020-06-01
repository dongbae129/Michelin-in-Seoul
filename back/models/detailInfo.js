module.exports = (sequelize, DataTypes) => {
  const DetailInfo = sequelize.define(
    "DetailInfo",
    {
      description: {
        type: DataTypes.TEXT(),
        allowNull: false,
      },
      phonenumber: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      weekday: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      weekend: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
  DetailInfo.associate = (db) => {
    db.DetailInfo.belongsTo(db.Restaurant);
  };
  return DetailInfo;
};
