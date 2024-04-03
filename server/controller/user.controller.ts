import { CreateUserDto } from "../dto/user";
import { invalidBodyError } from "../error";
import { UserService } from "../service";
import { H3Event } from 'h3'
import { handlerResponse } from "../util";


export class UserController {
    constructor(private userService: UserService) { }

    async createUser(event: H3Event) {
        const { email, name, password }: CreateUserDto = await readBody(event)
        if (email === undefined || name === undefined || password === undefined) { throw invalidBodyError() }
        const newUser = await this.userService.createUser({ email, name, password })
        const { password: _, ...user } = newUser
        return handlerResponse(event, 200, user)
    }
}