import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
})
export class LeftMenuComponent implements OnInit {

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Favourite',
      url: '/favourite',
      icon: 'bookmarks'
    },
    {
      title: 'About US',
      url: '/about-us',
      icon: 'information-circle'
    },

    {
      title: 'Contribute',
      url: '/about-us',
      icon: 'create'
    },

    {
      title: 'Share the Tip',
      url: '',
      icon: 'share'
    },
    {
      title: 'Rate Us',
      url: '/home',
      icon: 'star'
    },
    
  ];
  constructor() { }

  ngOnInit() {}

}
