import { User } from "./user.model"

export class Article{
    id: string
    title: string
    createdDate: string
    updatedDate: string
    createdBy: User
    updatedBy: User
    content: string
    leadImage: string

    constructor(title : string, content : string, leadImage : string){
        this.title = title;
        this.content = content;
        this.leadImage = leadImage;
    }
}