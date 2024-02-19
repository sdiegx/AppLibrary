import { IsBoolean, IsDate, IsInt, IsOptional, IsPositive, IsString, MinLength } from "class-validator";
import { IsArrayOfStrings } from "../validators/arrayOfStrings.validator";

export class CreateBookDto {
    @IsString()
    @MinLength(25)
    title: string;

    @IsString()
    @IsArrayOfStrings()
    authors: string[];

    @IsString()
    @MinLength(25)
    publisher: string;

    @IsDate()
    publicationDate: Date;

    @IsString()
    @MinLength(15)
    genre: string;
    
    @IsString()
    @MinLength(100)
    @IsOptional()
    summary?: string;

    @IsString()
    @MinLength(15)
    language: string;

    @IsInt()
    @IsPositive()
    pageCount: number;

    @IsString()
    @MinLength(50)
    physicalLocation: string;

    @IsBoolean()
    availabe: boolean;

    @IsInt()
    @IsPositive()
    numberOfCopies: number;
}