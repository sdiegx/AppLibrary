import { IsBoolean, IsDate, IsInt, IsOptional, IsPositive, IsString, MaxLength, MinLength } from "class-validator";
import { IsArrayOfStrings } from "../validators/arrayOfStrings.validator";
import { Transform } from "class-transformer";

export class CreateBookDto {
    @IsString()
    @MaxLength(50)
    @MinLength(8)
    title: string;

    @IsArrayOfStrings()
    authors: string[];

    @IsString()
    @MinLength(3)
    @MaxLength(25)
    publisher: string;

    @IsDate()
    @Transform(({ value }) => new Date(value)) // Asegúrate de que la cadena de fecha que estás enviando desde Postman esté en formato ISO 8601 (por ejemplo, "2022-02-24T12:00:00Z") para que pueda ser correctamente transformada en una instancia de Date por el DTO.
    publicationDate: Date;

    @IsString()
    @MinLength(4)
    @MaxLength(15)
    genre: string;
    
    @IsString()
    @MaxLength(100)
    @MinLength(15)
    @IsOptional()
    summary?: string; // no esta funcionando el opcional

    @IsString()
    @MinLength(3)
    @MaxLength(15)
    language: string;

    @IsInt()
    @IsPositive()
    pageCount: number;

    @IsString()
    @MaxLength(50)
    @MinLength(8)
    physicalLocation: string;

    @IsBoolean()
    available: boolean;

    @IsInt()
    @IsPositive()
    numberOfCopies: number;
}