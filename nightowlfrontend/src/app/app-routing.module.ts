import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksComponent } from './shared/books/books.component';
import { CommonComponent } from './shared/common/common.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { SpecificbookComponent } from './shared/specificbook/specificbook.component';

const routes: Routes = [{

  path:'',
  component:CommonComponent,
  children:[{
    path:'',
    component:BooksComponent,
  },
  {
  path:'bookdetails/:id',
  component:SpecificbookComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
  },
]
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
