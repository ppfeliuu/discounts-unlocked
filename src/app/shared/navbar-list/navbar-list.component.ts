import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-navbar-list',
  templateUrl: './navbar-list.component.html'
})
export class NavbarListComponent {

  @Output() searchT = new EventEmitter();

  @Input()
  category: any;

  constructor() { }

  searchDiscount(search: string) {
    this.searchT.emit(search);
  }

}
