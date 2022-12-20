import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../models/book.model'
import { BookService } from '../services/book.service'

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  inputName: string = ""
  inputAuthor: string = ""
  inputGenre: string = ""
  inputYear: number = 0
  inputDescription: string = ""
  inputPrice?: number
  @Input() index: number = 0

  constructor(private bookService: BookService){}

  ngOnInit(): void {
    
  }

  updateBook(){
    const updatedBook = new Book(
      this.inputName,
      this.inputAuthor,
      this.inputGenre,
      this.inputYear,
      this.inputDescription,
      this.inputPrice
    )
    this.bookService.updateBook(this.index, updatedBook)
  }
}
