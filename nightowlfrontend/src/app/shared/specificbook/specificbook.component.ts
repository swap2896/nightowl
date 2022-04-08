import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-specificbook',
  templateUrl: './specificbook.component.html',
  styleUrls: ['./specificbook.component.scss']
})
export class SpecificbookComponent implements OnInit {

  constructor(private service:BackendService,private actRoute: ActivatedRoute,private themeService: ThemeService) {
    this.themeColor=this.themeService.get_header_theme()
   }
  themeColor='primary'
  isloading:boolean=false
  book=[]
  bookid:any;
  ngOnInit(): void {
    this.isloading=true;
    this.bookid=this.actRoute.snapshot.params['id'];
    // console.log(this.bookid)
    this.book=[]
    this.service.get_books(this.bookid).subscribe(
      (result:any)=>{
        // console.log(result)
        let object=JSON.parse(result)
        if(object.books)
        {
        this.book=object.books[0];
        }
        this.isloading=false
      }
    )
  }

}
