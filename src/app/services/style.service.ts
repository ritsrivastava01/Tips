import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class StyleService {
    private _link: HTMLLinkElement;
    private _cssFileName: string = 'default';
  
    constructor() {
      console.log('lnk Ser');
      this.buildCssLink();
      this.updateLink(this._cssFileName);
  
    }
  
    private buildCssLink() {
      this._link = document.createElement('link');
      this._link.rel = 'stylesheet';
      this._link.type = 'text/css';
      (document.head || document.documentElement).appendChild(this._link);
    }
  
    public updateLink(fileName: string) {
      this._cssFileName =fileName;
      this._link.href = `assets/highlight/${fileName}.css`;
    }
  
    public cssFileName(): string {
      return this._cssFileName;
    };
  }
  