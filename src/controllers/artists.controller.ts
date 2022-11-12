import { plainToInstance } from "class-transformer";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source"
import { FetchArtistsResponseDTO } from "../dtos/artists/fetch-artists.response.dto";
import { Artist } from "../entities/artists.entity"

export const fetchArtists = async (request: Request, response: Response) => { 

    const artistRepo = AppDataSource.getRepository(Artist);

    const artists = await artistRepo.find();

    return response.status(200).json(plainToInstance(FetchArtistsResponseDTO, artists))

}
