import { Exclude, Expose } from "class-transformer";

@Exclude()
export class FetchArtistsResponseDTO { 

    @Expose()
    id: number;

    @Expose({ name: 'fullName' })
    name: string;

    @Expose()
    image: string;
    
}