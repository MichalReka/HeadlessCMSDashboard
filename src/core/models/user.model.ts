import { Article } from "./article.model"
import { Media } from "./media.model"

export class User{
    id: string
    firstName: string
    lastName: string
    role: UserRole
    createdDate: string
    createdArticles: Article[]
    profilePicture: Media
}

export enum UserRole{
    Admin,
    BaseRole
}