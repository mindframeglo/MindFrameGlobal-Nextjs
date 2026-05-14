/**
 * Blog Routes
 * Routes for blog CRUD operations
 */

import express from 'express';
import {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  getAdminBlogs,
  uploadImage,
} from '../controllers/blogController.js';
import { requireAdmin } from '../middleware/auth.js';
import upload from '../middleware/upload.js';

const router = express.Router();

/**
 * Public Routes
 */
router.get('/', getAllBlogs);
router.get('/:id', getBlogById);

/**
 * Protected Routes (Admin only)
 */
router.post('/', requireAdmin, createBlog);
router.put('/:id', requireAdmin, updateBlog);
router.delete('/:id', requireAdmin, deleteBlog);
router.get('/admin/all', requireAdmin, getAdminBlogs);
router.post('/upload-image', requireAdmin, upload.single('image'), uploadImage);

export default router;
