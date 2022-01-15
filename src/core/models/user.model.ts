export class User{
    id: string
    firstName: string
    lastName: string
    role: UserRole
}

export enum UserRole{
    Admin,
    BaseRole
}