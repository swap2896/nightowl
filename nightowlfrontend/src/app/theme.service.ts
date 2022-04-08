import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private colorTheme: string='';
  // private darkmode = new BehaviorSubject<string>('dark-mode'); // true is your initial value
  // fixed$ = this.darkmode.asObservable()

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initTheme() {
    this.getColorTheme();
    this.renderer.addClass(document.body, this.colorTheme);
  }

  update(theme: 'light-mode' | 'dark-mode') {
    this.setColorTheme(theme);
    const previousColorTheme =
      theme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    this.renderer.removeClass(document.body, previousColorTheme);
    this.renderer.addClass(document.body, theme);
  }
  setheader_theme(color:string)
  {
    localStorage.setItem('user-color',color)
  }
  get_header_theme()
  {
    let color='primary'
    if (localStorage.getItem('user-color')) {
      let y=localStorage.getItem('user-color');
      if(y!='' && y !=null)
      {
      color = y;
      }
    } 
    return color
  }
  

  isDarkMode() {
    return this.colorTheme === 'dark-mode';
  }

  private setColorTheme(theme:string) {
    this.colorTheme = theme;
    localStorage.setItem('user-theme', theme);
  }


  private getColorTheme() {
    if (localStorage.getItem('user-theme')) {
      let y=localStorage.getItem('user-theme');
      if(y!='' && y !=null)
      {
      this.colorTheme = y;
      }
    } else {
      this.colorTheme = 'dark-mode';
    }
  }
}
