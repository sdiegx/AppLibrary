import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class RegisterDto {

	@IsString()
	@MaxLength(40)
	@MinLength(2)
	firstName: string;

	@IsString()
	@MaxLength(40)
	@MinLength(3)
	lastName: string;

	@IsEmail()
	@MaxLength(40)
	@MinLength(3)
	email: string;

	@IsString()
	@MaxLength(20)
	@MinLength(8)
	password: string;
}