import { IsBoolean, IsDate, ValidateNested } from "class-validator";
import { Transform, Type } from "class-transformer";
import { User } from "src/users/entities/user.entity";
export class CreateLoanDto {
    @IsDate()
    @Transform(({ value }) => new Date(value))
    start_date: Date;

    @IsDate()
    @Transform(({ value }) => new Date(value))
    end_date: Date;

    @IsBoolean()
    status: boolean;

    @ValidateNested()
    @Type(() => User)
    user: User;
}
