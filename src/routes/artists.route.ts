import express from 'express';
import { fetchArtists } from '../controllers/artists.controller';

const router = express.Router();

router.get('/', fetchArtists);

export default router;