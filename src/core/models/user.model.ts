export class User{
    id: string
    firstName: string
    lastName: string
    role: UserRole
    createdDate: string
}

export enum UserRole{
    Admin,
    BaseRole
}