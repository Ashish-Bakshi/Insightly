import prisma from "../utils/prisma.js";

export const getAllArticlesHandler = async (req, res) => {
  try {
    const articles = await prisma.article.findMany();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createArticleHandler = async (req, res) => {
  try {
    const article = await prisma.article.create({
      data: {
        ...req.body, // title, content, tags, etc.
        authorId: req.user.id, // id extracted from the JWT
      },
    });
    res.status(201).json(article);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateArticleHandler = async (req, res) => {
  try {
    const existingArticle = await prisma.article.findUnique({
      where: { id: req.params.id },
    });
    if (!existingArticle)
      return res.status(404).json({ error: "Article Not found" });
    if (existingArticle.authorId !== req.user.id) {
      return res.status(403).json({ error: "Forbidden" });
    }

    const updatedArticle = await prisma.article.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(updatedArticle);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteArticleHandler = async (req, res) => {
  try {
    const existingArticle = await prisma.article.findUnique({
      where: { id: req.params.id },
    });
    if (!existingArticle)
      return res.status(404).json({ error: "Article Not found" });
    if (existingArticle.authorId !== req.user.id) {
      return res.status(403).json({ error: "Forbidden" });
    }

    await prisma.article.delete({ where: { id: req.params.id } });
    res.json({ message: "Article Sucessfully Deleted !!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getArticlesByUserHandler = async (req, res) => {
  try {
    const articles = await prisma.article.findMany({
      where: { authorId: req.params.id },
    });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getArticleByIdHandler = async (req, res) => {
  try {
    const article = await prisma.article.findUnique({
      where: { id: req.params.id },
      include: { author: true, category: true },
    });
    if (!article) return res.status(404).json({ error: "Article Not found" });
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getArticlesByCategoryHandler = async (req, res) => {
  try {
    console.log("raw req.params:", req.params);
    const category = req.params.categoryId; 
    const articles = await prisma.article.findMany({
      where: {
        categories: { hasSome: [category] }, 
      },
    });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
