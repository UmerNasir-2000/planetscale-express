import { DataSource } from "typeorm";
import { Artist } from "./entities/artists.entity";

export const AppDataSource = new DataSource({
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    },
    entities: [Artist],
    supportBigNumbers: true,
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,  
})