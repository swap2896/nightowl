import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  isloading:boolean=false
  books_by_rating=[]
  topratedbooks=[]
  books_by_category=[]
  constructor(private service:BackendService,private themeService:ThemeService) {
    this.themeColor=this.themeService.get_header_theme()
  }
 themeColor='primary'

  ngOnInit(): void {
    this.isloading=true;
    this.books_by_rating=[]
    this.topratedbooks=[]
    this.books_by_category=[]
    this.service.get_dashboard_details().subscribe(
      (result:any)=>{
        let object=JSON.parse(result)
        this.books_by_rating=object.books_by_rating
        this.topratedbooks=object.top_ten_rated_books
        this.books_by_category=object.books_by_category
        this.isloading=false
      }
    )
  }

}
