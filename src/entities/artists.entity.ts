import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from "typeorm"

@Entity({ name: 'artists' })
export class Artist {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'full_name' })
    fullName: string;

    @Column({ name: 'image_url', nullable: true })
    image?: string;

    @Column({ name: 'imdb_code', nullable: true, type: 'char', length: 7, unique: true })
    IMDB: string;

}
