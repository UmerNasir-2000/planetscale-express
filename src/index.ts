import dotenv from 'dotenv';
dotenv.config();

import 'reflect-metadata';
import express from 'express';
import morgan from 'morgan'
import { StatusCodes } from 'http-status-codes';

import { AppDataSource } from './data-source';
import logger from './utils/logger'
import artistsRouter from './routes/artists.route';

async function main() {

    try {
        
        const app = express();

        const PORT = process.env.PORT;

        const { isInitialized } = await AppDataSource.initialize();

        if (isInitialized) logger.info('Successfully connected to planetscale..');

        app.use(morgan('tiny'));

        app.get('/healthcheck', (request, response) => response.status(StatusCodes.OK).json({ message: 'ping successfull!' }));

        app.use('/v1/artists', artistsRouter);

        app.use('', (_, response) => { 
            return response.status(StatusCodes.NOT_FOUND).json({ message: 'route does not exists.' });
        })

        app.listen(PORT, () => logger.info(`Server running at https://yts-api.cyclic.app:${PORT}/`));

	
    } catch (error) {

        logger.error("error while starting app", error);

        process.exit(1);
	
    }
   
}

main();