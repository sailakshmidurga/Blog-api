const express = require("express");
const { connectDB } = require("./config/db");

/* Import models (important for relationships) */
require("./models/author.model");
require("./models/post.model");

/* Import routes */
const authorRoutes = require("./routes/author.routes");
const postRoutes = require("./routes/post.routes");

const app = express();

/* Middleware */
app.use(express.json());

/* Database connection */
connectDB();

/* Routes */
app.use("/authors", authorRoutes);
app.use("/posts", postRoutes);

/* Health check */
app.get("/", (req, res) => {
  res.send("Blog API is running");
});

/* Server */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
