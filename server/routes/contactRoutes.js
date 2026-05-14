
/**
 * Contact Routes
 * Handles all contact form related endpoints
 */

import express from 'express';
import {
  createContact,
  getAllContacts,
  getContactById,
  updateContactStatus,
  deleteContact,
  getContactStats,
  submitQuickContact,
} from '../controllers/contactController.js';

const router = express.Router();

/**
 * @route   POST /api/contact
 * @desc    Submit contact form
 * @access  Public
 */
router.post('/contact', createContact);

/**
 * @route   GET /api/contacts
 * @desc    Get all contact submissions (Admin only)
 * @access  Private/Admin
 */
router.get('/contacts', getAllContacts);

/**
 * @route   GET /api/contacts/stats
 * @desc    Get contact statistics (Admin only)
 * @access  Private/Admin
 */
router.get('/contacts/stats', getContactStats);

/**
 * @route   GET /api/contact/:id
 * @desc    Get single contact submission (Admin only)
 * @access  Private/Admin
 */
router.get('/contact/:id', getContactById);

/**
 * @route   PUT /api/contact/:id/status
 * @desc    Update contact status (Admin only)
 * @access  Private/Admin
 */
router.put('/contact/:id/status', updateContactStatus);

/**
 * @route   DELETE /api/contact/:id
 * @desc    Delete contact submission (Admin only)
 * @access  Private/Admin
 */
router.delete('/contact/:id', deleteContact);


router.post('/contact/quick', submitQuickContact);


export default router;