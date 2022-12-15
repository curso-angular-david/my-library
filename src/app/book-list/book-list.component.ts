import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../models/book.model'
import { AlertService } from '../services/alert.service'
import { Logger } from '../services/logger.services'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [Logger]
})
export class BookListComponent {
  title="Lista de libros"
  @Input() books: Book[] = []
  @Output() selectBookEvent = new EventEmitter<Book>()

  constructor(private logger: Logger, private alert: AlertService){}

  selectBook(book: Book){
    this.selectBookEvent.emit(book)
    const message = "Se ha seleccionado el libro "+book.name
    this.logger.log(message)
    this.alert.showAlert(message)
  }
}
