import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/Model/book.model';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {
  public theBook:any;
  public bookList: Array<Book> = [] 
  public id:number=0;
  public booUrl: string = '../../assets/books_source.json'
  public isReady:boolean=false;
  constructor( private router: Router,
    private route: ActivatedRoute,
    private _books: BookService){}
  ngOnInit() {  
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this._books.getAllBooks(this.booUrl).subscribe({
        next: (v) => {
          this.bookList = v;
        },
        error: (e) => console.error(e),
        complete: () => {
          this.theBook=this.bookList.at(this.id); 
          this.isReady = true
        }
      })
     
    }
  }
  goBack(){
    this.router.navigate(['/home/books']);
  }
}
