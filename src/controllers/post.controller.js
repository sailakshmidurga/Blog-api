const Post = require("../models/post.model");
const Author = require("../models/author.model");

exports.createPost = async (req, res) => {
  try {
    const { title, content, author_id } = req.body;

    const author = await Author.findByPk(author_id);
    if (!author) {
      return res.status(400).json({ message: "Author does not exist" });
    }

    const post = await Post.create({ title, content, author_id });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const where = {};
    if (req.query.author_id) {
      where.author_id = req.query.author_id;
    }

    const posts = await Post.findAll({
      where,
      include: Author
    });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: Author
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    await post.update(req.body);
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    await post.destroy();
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
