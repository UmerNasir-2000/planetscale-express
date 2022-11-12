import dotenv from 'dotenv';
dotenv.config();

import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './data-source';
import { fetchArtists } from './controllers/artists.controller';
import artistsRouter from './routes/artists.route'

async function main() {

    try {
        
        const app = express();

        const PORT = process.env.PORT;

        await AppDataSource.initialize();

        app.get('/api/artists', artistsRouter);

        app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

	
    } catch (error) {

        console.log("🚀 ~ error", error)
	
    }
   
}

main();