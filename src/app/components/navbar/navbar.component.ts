import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
      {
        label: 'My Charts',
        icon: 'pi pi pi-chart-bar',
        routerLink: ['/charts'],
      },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' },
    ];
  }
}
