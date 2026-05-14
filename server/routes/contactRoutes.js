import express from 'express';
import {
  createContact,
  getAllContacts,
  getContactById,
  updateContactStatus,
  deleteContact,
  getContactStats,
  submitQuickContact,
  submitServiceContact,
} from '../controllers/contactController.js';

const router = express.Router();

// ── Public routes (no :id conflict) ──────────────────────
router.post('/contact', createContact);
router.post('/contact/quick', submitQuickContact);       // ← pehle
router.post('/contact/service', submitServiceContact);   // ← pehle

// ── Admin routes ──────────────────────────────────────────
router.get('/contacts', getAllContacts);
router.get('/contacts/stats', getContactStats);
router.get('/contact/:id', getContactById);              // ← :id baad mein

router.put('/contact/:id/status', updateContactStatus);
router.delete('/contact/:id', deleteContact);

export default router;