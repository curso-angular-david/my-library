import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Book } from '../models/book.model'
import { BookService } from '../services/book.service'

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  title='Detalle de libro'
  book?: Book 
  index: number = 0
  registeredDate?: Date

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private bookService: BookService
  ){}

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id']
    this.book=this.bookService.getBookByIndex(this.index)
    this.registeredDate= new Date(this.book?.registeredDate ?? '')
  }

  navigateHome(){
    this.router.navigate([''])
  }
}
