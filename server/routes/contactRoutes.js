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
router.post('/contact/quick', submitQuickContact);        // header + contact form email bhejega
router.post('/quick', submitQuickContact);                // backward compatibility

// ── Admin routes ──────────────────────
router.get('/contacts', getAllContacts);
router.get('/contacts/stats', getContactStats);
router.get('/contact/:id', getContactById);
router.put('/contact/:id/status', updateContactStatus);
router.delete('/contact/:id', deleteContact);

export default router;