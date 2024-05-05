const sequelize = require("../db");
const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static async findUser(username, password) {
    try {
      const user = await User.findByPk(username);
      if (user && user.password === password) {
        return user;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profile_picture_name: {
      type: DataTypes.STRING,
    },
    is_banned: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    is_Admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

User.hasMany(SongRank, { foreignKey: "user_id" });
User.hasMany(ArtistRank, { foreignKey: "user_id" });
User.hasMany(Friend, { foreignKey: "friend_id" });
Friend.belongsTo(User, { foreignKey: "friend_id" });
SongRank.belongsTo(User, { foreignKey: "user_id" });
ArtistRank.belongsTo(User, { foreignKey: "user_id" });

module.exports = User;
