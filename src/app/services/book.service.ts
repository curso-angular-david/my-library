import { Injectable } from '@angular/core';
import { Book } from '../models/book.model'; 
import { DataService } from './data.service'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = []
  selectedBook: Book = this.books[0]

  constructor(private dataService: DataService) { 
    this.dataService.getBooks().subscribe(
      response => this.books = Object.values(response)
    )
  }

  createBook(newBook: Book) {
    this.books.push(newBook)
    this.dataService.saveBooks(this.books)
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
