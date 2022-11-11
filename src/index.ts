import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
import { AppDataSource } from './data-source';
import { Artist } from './entities/artists.entity';

async function main() {

    try {
        
        const app = express();

        const PORT = process.env.PORT;

        const db = await AppDataSource.initialize();

        app.get('/', async (req, res) => {

            const artistRepository = db.getRepository(Artist);

            const artists = await artistRepository.find();

            return res.status(200).json({ artists });

        });

        app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

	
    } catch (error) {

        console.log("🚀 ~ error", error)
	
    }
   
}

main();