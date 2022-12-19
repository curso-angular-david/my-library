export class Book {
  name: string
  author: string
  genre: string
  publishedYear?: number
  description?: string

  constructor(
    name: string,
    author: string,
    genre: string,
    publishedYear: number,
    description: string,
    public price?: number,
    public registeredDate?: string 
  ){
    this.name = name
    this.author = author
    this.genre = genre
    this.publishedYear = publishedYear
    this.description = description
  }
}