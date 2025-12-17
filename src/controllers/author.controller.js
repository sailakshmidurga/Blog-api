const Author = require("../models/author.model");
const Post = require("../models/post.model");

exports.createAuthor = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    const author = await Author.create({ name, email });
    res.status(201).json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);

    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }

    res.json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);

    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }

    await author.update(req.body);
    res.json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);

    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }

    await author.destroy();
    res.json({ message: "Author deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAuthorPosts = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id, {
      include: Post
    });

    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }

    res.json(author.Posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
