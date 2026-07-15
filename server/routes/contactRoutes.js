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

// ── Public routes ──────────────────────
router.post('/contact', createContact);                   // DB में save होगा
router.post('/quick', submitQuickContact);                // सिर्फ email भेजेगा

// ── Admin routes ──────────────────────
router.get('/contacts', getAllContacts);
router.get('/contacts/stats', getContactStats);
router.get('/contact/:id', getContactById);
router.put('/contact/:id/status', updateContactStatus);
router.delete('/contact/:id', deleteContact);

export default router;