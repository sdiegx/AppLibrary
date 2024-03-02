import { Transform } from "class-transformer";
import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class RegisterDto {

	@Transform(({ value }) => value.trim())
	@IsString()
	@MaxLength(40)
	@MinLength(2)
	firstName: string;

	@Transform(({ value }) => value.trim())
	@IsString()
	@MaxLength(40)
	@MinLength(3)
	lastName: string;

	@IsEmail()
	email: string;

	@Transform(({ value }) => value.trim())
	@IsString()
	@MinLength(8)
	password: string;
}