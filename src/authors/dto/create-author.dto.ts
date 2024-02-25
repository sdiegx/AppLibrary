import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateAuthorDto {
	
	@IsString()
	@MinLength(3)
	@MaxLength(50)
	firstName: string;

	@IsString()
	@MinLength(3)
	@MaxLength(50)
	lastName: string;

	@IsString()
	@MinLength(6)
	@MaxLength(50)
	college: string; // universidad en que trabaja

}
