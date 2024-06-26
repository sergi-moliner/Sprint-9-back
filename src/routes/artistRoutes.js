import { Router } from 'express';
import { createArtist, getArtist, updateArtist, deleteArtist } from '../controllers/artistController.js';
import { authenticateToken } from '../middlewares/authenticateToken.js';

const router = Router();

router.post('/', authenticateToken(['user']), createArtist);
router.get('/:id', authenticateToken(['user']), getArtist);
router.put('/:id', authenticateToken(['user']), updateArtist);
router.delete('/:id', authenticateToken(['user']), deleteArtist);

export default router;
