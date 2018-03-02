import { Component, OnInit } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books ;
  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/book').subscribe(data => {
      this.books = data;
      });
  }

}
