import { Component } from '@angular/core';
import { Book } from './models/book.model';
import { Logger } from './services/logger.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Library';
  books: Book[] = [
    new Book('Don Quijote', 'Cervantes', "Novela", 1800, ""),
    new Book('100 años de soledad', 'Garcia Marquez', "Novela", 1980, ""),
    new Book('El señor de los anillos', 'Tolkien', "Fantasia", 1960, ""),
  ] 
  selectedBook: Book = this.books[0]

  constructor(private logger: Logger){}

  createBook(newBook: Book) {
    this.books.push(newBook)
    this.logger.log("Se ha creado un libro!")
  }

  setSelectedBook(selectBook: Book) {
    this.selectedBook = selectBook
  }
}
