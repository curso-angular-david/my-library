import { Injectable } from '@angular/core';
import { Book } from '../models/book.model'; 

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [
    new Book('Don Quijote', 'Cervantes', "Novela", 1800, ""),
    new Book('100 años de soledad', 'Garcia Marquez', "Novela", 1980, ""),
    new Book('El señor de los anillos', 'Tolkien', "Fantasia", 1960, ""),
  ] 
  constructor() { }

  createBook(newBook: Book) {
    this.books.push(newBook)
    //this.logger.log("Se ha creado un libro!")
  }
}
