import dotenv from 'dotenv';
dotenv.config();

import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './data-source';
import { fetchArtists } from './controllers/artists.controller';

async function main() {

    try {
        
        const app = express();

        const PORT = process.env.PORT;

        const db = await AppDataSource.initialize();

        app.get('/', async (req, res) => {

            return await fetchArtists(req, res)

        });

        app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

	
    } catch (error) {

        console.log("🚀 ~ error", error)
	
    }
   
}

main();