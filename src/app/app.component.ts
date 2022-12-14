import { Component } from '@angular/core';
import { Book } from './models/book.model';
import { BookService } from './services/book.service'
import { Logger } from './services/logger.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Logger]
})
export class AppComponent {
  title = 'My Library';
  books:Book[]=[]

  constructor(private logger: Logger, private bookService: BookService){
    this.books = this.bookService.books
  }
}
