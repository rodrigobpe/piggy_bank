import { CreateUserDto } from "../dto/user";
import { badRequestError } from "../error";
import { UserRepository } from "../repository/user.repository";
import { hashPassword } from "../util";

export class UserService{
    constructor(private readonly userRepo:UserRepository){}

    async createUser({email,name,password}:CreateUserDto){
        const userExists = await this.userRepo.getByEmail({email})
        if(userExists) throw badRequestError("Usuário já cadastrado!")

        const user = await this.userRepo.create({email,name,password:hashPassword(password)})
        return user
    }
}