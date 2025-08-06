import express from 'express';
import {    createArticleHandler, 
            updateArticleHandler, 
            deleteArticleHandler, 
            getArticlesByUserHandler, 
            getAllArticlesHandler, 
            getArticlesByCategoryHandler, 
            getArticleByIdHandler 
        } from '../controllers/article.controller.js';
import { authenticateUser } from '../middleware/auth.middleware.js';

const router = express.Router();


router.get('/', getAllArticlesHandler);                                      // Endpoint to get all articles

router.post('/create', authenticateUser, createArticleHandler);             // Endpoint to create a new article

router
    .route('/:id')
    .get(getArticleByIdHandler)                                             // Endpoint to get a specific article by ID
    .put(authenticateUser, updateArticleHandler)                            // Endpoint to update an article
    .delete(authenticateUser, deleteArticleHandler);                        // Endpoint to delete an article

router.get('/user/:userId', authenticateUser, getArticlesByUserHandler);    // Endpoint to get articles by a specific user

router.get('/category/:categoryId', getArticlesByCategoryHandler);          // Endpoint to get articles by category



const articleRouter = router;
export default articleRouter; // Exporting the articleRouter for use in the index file