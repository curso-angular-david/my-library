import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Book } from '../models/book.model'
import { BookService } from '../services/book.service'

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {
  title='Detalle de libro'
  book?: any 
  index: number = 0
  registeredDate?: Date

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private bookService: BookService
  ){}

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id']
    this.bookService.getBookByIndex(this.index).subscribe(
        response => {
          this.book = response
          this.registeredDate= new Date(this.book?.registeredDate ?? '')
        }
      )

  }

  ngOnDestroy(): void {
    console.log("Book detail eliminado!")
  }

  navigateHome(){
    this.router.navigate([''])
  }
}
