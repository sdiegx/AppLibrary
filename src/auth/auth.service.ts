import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

	constructor(private readonly usersService: UsersService) {}

	register() {
		return 'register';
	}

	login() {
		return 'login';
	}
}
