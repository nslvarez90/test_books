import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/book.service';
import { Book } from 'src/app/Model/book.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements  OnInit{
  public bookList: Array<Book> = [] 
  public booUrl: string = '../../assets/books_source.json'
  public isReady:boolean=false;
  searchTerm = "";
  constructor(
    private _books: BookService,
    private route: Router,
  ) { }
  ngOnInit() {    
      this._books.getAllBooks(this.booUrl).subscribe({
        next: (v) => {
          this.bookList = v;
        },
        error: (e) => console.error(e),
        complete: () => {
          this.isReady = true
        }
      })
    }

    viewBook(item:number){
        //console.log(item)
        this.route.navigate(['home/book/' + item]);
    }  
}
