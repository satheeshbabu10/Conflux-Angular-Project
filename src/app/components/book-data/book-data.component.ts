import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { Book, BookService } from 'src/app/services/book.service';

import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BookDataComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
      this.bookService.getBooks().
      then(books => this.books = books);
  }

}
