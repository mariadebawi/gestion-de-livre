import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookCreateComponent implements OnInit {
  image ;
  book = {};
  fileToUpload: File = null;


  constructor(private http: HttpClient, private router: Router  ) { }

  ngOnInit() {
  }


  onFileChange(event) {
    
    if(event.target.files.length > 0) {

      let file = event.target.files[0];
     

      var reader = new FileReader();

      
      reader.onload = function(){
         localStorage.setItem("Data", reader.result);
         
       
      };

      reader.readAsDataURL(event.target.files[0]);
   
      

    }
   

}






  saveBook() {
    this.http.post('/book', this.book)
      .subscribe(res => {
        this.image=localStorage.getItem("Data");
          let id = res['_id'];
          this.router.navigate(['/book-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}