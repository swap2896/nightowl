import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SpecificbookComponent } from './specificbook/specificbook.component';
import { RouterModule } from '@angular/router';
import { CommonComponent } from './common/common.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatTableModule} from '@angular/material/table';
import { RatingComponent } from './rating/rating.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { TopratedbooksComponent } from './topratedbooks/topratedbooks.component';
import { BooksByCategoryComponent } from './books-by-category/books-by-category.component';






@NgModule({
  declarations: [
    BooksComponent,
    SpecificbookComponent,
    CommonComponent,
    HeaderComponent,
    DashboardComponent,
    RatingComponent,
    TopratedbooksComponent,
    BooksByCategoryComponent,
    
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    FlexLayoutModule,
    RouterModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatDividerModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    HighchartsChartModule
  ],
  exports:[
    BooksComponent
  ]
})
export class SharedModule { }