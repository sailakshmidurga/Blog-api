const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Author = require("./author.model");

const Post = sequelize.define(
  "Post",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "authors",
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    tableName: "posts",
    timestamps: true,
  }
);

/*  Relationships */
Author.hasMany(Post, {
  foreignKey: "author_id",
  onDelete: "CASCADE",
});

Post.belongsTo(Author, {
  foreignKey: "author_id",
});

module.exports = Post;
