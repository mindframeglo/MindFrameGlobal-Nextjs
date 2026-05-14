/**
 * Blog Model
 * Represents a blog post with all necessary fields
 */

import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a blog title'],
      trim: true,
      maxlength: [200, 'Title cannot be more than 200 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a blog description'],
    },
    content: {
      type: String,
      required: [true, 'Please provide blog content'],
    },
    image: {
      type: String,
      required: [true, 'Please provide a blog image URL'],
    },
    imagePublicId: {
      type: String, // For Cloudinary image deletion
      default: null,
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    author: {
      type: String,
      default: 'Admin',
    },
    category: {
      type: String,
      enum: ['Marketing', 'Social Media', 'SEO', 'Content', 'Design', 'Other'],
      default: 'Other',
    },
    featured: {
      type: Boolean,
      default: false,
    },
    views: {
      type: Number,
      default: 0,
    },
    published: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index for search functionality
blogSchema.index({ title: 'text', description: 'text', content: 'text' });
blogSchema.index({ tags: 1 });
blogSchema.index({ createdAt: -1 });

export default mongoose.model('Blog', blogSchema);
