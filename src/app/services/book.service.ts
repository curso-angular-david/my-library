import { Injectable } from '@angular/core';
import { Book } from '../models/book.model'; 
import { DataService } from './data.service'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = []
  selectedBook: Book = this.books[0]

  constructor(private dataService: DataService) { }

  createBook(newBook: Book) {
    this.dataService.getBooks().subscribe(
      response => {
        const booksLenght = Object.values(response).length
        this.dataService.updateBook(booksLenght, newBook)
      }
    )
    //this.logger.log("Se ha creado un libro!")
  }

  setSelectedBook(selectBook: Book) {
    this.selectedBook = selectBook
  }

  getBooks() {
    return this.dataService.getBooks()
  }

  getBookByIndex(index: number){
    return this.dataService.getBook(index)
    //return this.books[index]
  }

  updateBook(index: number, book: Book){
    this.dataService.updateBook(index, book)
  }
}
