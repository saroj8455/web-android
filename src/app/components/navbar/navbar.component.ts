import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  menuItems!: MenuItem[];

  ngOnInit(): void {
    this.menuItems = [
      {
          label: 'File',
          icon: 'pi pi-fw pi-home',
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
      },
      {
          label: 'Users',
          icon: 'pi pi-fw pi-user',
          items: [
              {
                  label: 'Create Worker',
                  icon: 'pi pi-fw pi-user-plus',
                  routerLink:"create-worker"
              },
              {
                  label: 'List Workers',
                  icon: 'pi pi-fw pi-user-minus',
                  routerLink:"list-workers"
              },
          ]
      },
      {
          label: 'Events',
          icon: 'pi pi-fw pi-calendar',
      },
      {
          label: 'Quit',
          icon: 'pi pi-fw pi-power-off'
      }
  ];
  }

}
