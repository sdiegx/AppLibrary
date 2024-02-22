import { IsBoolean, IsDate, IsInt, IsOptional, IsPositive, IsString, MaxLength, MinLength } from "class-validator";
import { Transform } from "class-transformer";
export class CreateLoanDto {
    @IsDate()
    @Transform(({ value }) => new Date(value))
    start_date: Date

    @IsDate()
    @Transform(({ value }) => new Date(value))
    end_date: Date

    @IsBoolean()
    status: boolean
}
