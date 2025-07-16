import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { startServer , app } from './server.js';
import authRouter from './routes/auth.route.js';
import articleRouter from './routes/article.route.js';


startServer();

app.use(express.json()); // parse JSON bodies
app.use(cookieParser()); // parse cookies
app.use(cors({
  origin: process.env.FRONTEND_URL || "https://insightly-chi.vercel.app", // Replace with your frontend URL
  credentials: true
}));


app.use("/api/v1/auth", authRouter);
app.use('/api/v1/articles', articleRouter);

