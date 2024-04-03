export class User{
    id:string;
    name:string;
    email:string;
    password:string
}

export class CreateUserDto{
    name:string;
    email:string;
    password:string;
}