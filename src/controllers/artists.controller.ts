import { Request, Response } from "express";
import { plainToInstance } from "class-transformer";
import { StatusCodes as StatusCode } from 'http-status-codes';
import { AppDataSource } from "../data-source";
import { FetchArtistsResponseDTO } from "../dtos/artists/fetch-artists.response.dto";
import { Artist } from "../entities/artists.entity";

export const fetchArtists = async (request: Request, response: Response): Promise<Response<FetchArtistsResponseDTO[]>> => { 

    try {

        const artistRepository = AppDataSource.getRepository(Artist);

        const artists = await artistRepository.find();
    
        const transformedArtists = plainToInstance(FetchArtistsResponseDTO, artists)
    
        return response.status(StatusCode.OK).json(transformedArtists);
        
    } catch (error) {

        console.log(error);

        return response.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: 'Something went wrong.' });

    }


}
