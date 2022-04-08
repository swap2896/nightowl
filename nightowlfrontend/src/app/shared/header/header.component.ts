import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BackendService } from 'src/app/services/backend.service';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'nightowlfrontend';
  isDarkMode: boolean=true;
  showFiller = false;
  themeColor:string;

  constructor(private themeService: ThemeService, public dialog: MatDialog,private service: BackendService) {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
    this.themeColor=this.themeService.get_header_theme()
  }
  public navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
}
themechanged(color:any)
{
  this.themeColor=color
  this.themeService.setheader_theme(color)
  
}

  toggleDarkMode() {
    window.location.reload();
    this.isDarkMode = this.themeService.isDarkMode();

    this.isDarkMode
      ? this.themeService.update('light-mode')
      : this.themeService.update('dark-mode');
      
  }
  ngOnInit() {
   
  }

}
