import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topratedbooks',
  templateUrl: './topratedbooks.component.html',
  styleUrls: ['./topratedbooks.component.scss']
})
export class TopratedbooksComponent implements OnInit {

  constructor(private router: Router) { }
  @Input() topratedbooks=[]
  counter = Array;
  redirect(bookid:any)
  {
    this.router.navigate(['/bookdetails/',bookid])

  }
  ngOnInit(): void {
  }

}
