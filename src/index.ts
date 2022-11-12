import dotenv from 'dotenv';
dotenv.config();

import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './data-source';
import artistsRouter from './routes/artists.route';
import { StatusCodes } from 'http-status-codes';

async function main() {

    try {
        
        const app = express();

        const PORT = process.env.PORT;

        const { isInitialized } = await AppDataSource.initialize();

        if (isInitialized) console.log('Successfully connected to planetscale..')

        app.get('/healthcheck', (request, response) => response.status(StatusCodes.OK).json({ message: 'ping successfull!' }))

        app.use('/api/artists', artistsRouter);

        app.use('', (request, response) => { 
            return response.status(StatusCodes.NOT_FOUND).json({ message: 'route does not exists.' });
        })

        app.listen(PORT, () => console.log(`Server running at https://yts-api.cyclic.app/:${PORT}`));

	
    } catch (error) {

        console.log("🚀 ~ error", error)
	
    }
   
}

main();