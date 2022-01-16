import { User } from "./user.model"

export class Article{
    id: string
    title: string
    createdDate: string
    updatedDate: string
    createdBy: User
    updatedBy: User
}