import { CreateUserDto, User } from "~/server/dto/user";
import { UserRepository } from "../user.repo";
import { prisma } from '../../config'

export class PrismaUserRepo implements UserRepository {
    async getByEmail({ email }: Omit<CreateUserDto, "name" | "password">): Promise<User | null> {
        return await prisma.user.findUnique({
            where: { email }
        })
    }
    async create({ email, name, password }: CreateUserDto): Promise<User> {
        return await prisma.user.create({
            data: { email, name, password }
        })
    }

    async getAll(): Promise<User[]> {
        return await prisma.user.findMany()
    }

}