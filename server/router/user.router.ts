import { userFactory } from "../factory/user.factory"

export const userRouter = createRouter()

const makeUserController = userFactory()

userRouter.post('/users', defineEventHandler((event) => (makeUserController.createUser(event))))