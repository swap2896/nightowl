import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import * as Highcharts from 'highcharts';
declare var require: any;
import highcharts3D from 'highcharts/highcharts-3d.src';

import * as Highcharts3d from "highcharts/highcharts-3d";
import { ThemeService } from 'src/app/theme.service';
// require('highcharts/themes/dark-unica')(Highcharts);
// require('highcharts/themes/brand-light')(Highcharts);



highcharts3D(Highcharts);

@Component({
  selector: 'app-books-by-category',
  templateUrl: './books-by-category.component.html',
  styleUrls: ['./books-by-category.component.scss']
})
export class BooksByCategoryComponent implements OnInit {
  isDarkMode:boolean=false;
  constructor(private themeService: ThemeService) {
    this.isDarkMode = this.themeService.isDarkMode();
   }
  @Input() books_by_category=[];
  Highcharts=Highcharts;
  updateFlag=false;
  chartConstructor = "chart";
  chartOptions={}
  chartCallback: any;
  ngOnInit(): void {
    this.themeService
    if(this.isDarkMode)
    {
    require('highcharts/themes/dark-unica')(Highcharts);
    this.chartOptions={
      chart: {
        type: 'pie',
          options3d: {
              enabled: true,
              alpha: 45
          },
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
   
    },
    title: {
        text: 'Number of Books in each Category'
    },
    credits: {
      enabled: false
  },
    exporting: {
      enabled: false
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
          innerSize: 100,
          depth: 45,
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>:{point.y}'
          },
        }
    },
    series: [{
        name: 'Books',
        colorByPoint: true,
        data: this.books_by_category 
    }]
  }
  }
  else{
    require('highcharts/themes/brand-light')(Highcharts);
    this.chartOptions={
      chart: {
        type: 'pie',
          options3d: {
              enabled: true,
              alpha: 45
          },
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false, 
    },
    title: {
        text: 'Number of Books in each Category'
    },
    credits: {
      enabled: false
  },
    exporting: {
      enabled: false
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
          innerSize: 100,
          depth: 45,
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>:{point.y}'
          },
        }
    },
    series: [{
        name: 'Books',
        colorByPoint: true,
        data: this.books_by_category 
    }]
  }
  
  }
}


 

}
