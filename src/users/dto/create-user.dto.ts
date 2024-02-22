import { Transform } from "class-transformer";
import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";
export class CreateUserDto {


	@IsString()
	@MaxLength(40)
	@MinLength(3)
	firstName: string;

	@IsString()
	@MaxLength(40)
	@MinLength(3)
	lastName: string;

	@IsString()
	@IsEmail()
	@MaxLength(40)
	@MinLength(3)
	email: string;

	@IsString()
	@MaxLength(20)
	@MinLength(8)
	password: string;
}
