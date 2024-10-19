export interface Book{
    _id:string;
    title:string;
    coverImage:string;
    file:string;
    author:Author
}

export type Author = {
    name:string;
}