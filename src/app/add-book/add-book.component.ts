import { Component, OnInit } from '@angular/core';

import { Book } from 'app/models/book';
import { DataService} from 'app/core/data.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styles: []
})
export class AddBookComponent implements OnInit {

  constructor(private dataServce: DataService) { }

  ngOnInit() { }

  saveBook(formValues: any): void {
    let newBook: Book = <Book>formValues;
    newBook.bookID = 0;
    console.log(newBook);

    this.dataServce.addBook(newBook)
      .subscribe(
        (data: Book) => console.log(data),
        (err: any) => console.log(err)
      )
  }
}
