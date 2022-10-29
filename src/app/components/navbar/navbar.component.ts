import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'commerce-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isUserMenuHidden = true;
  constructor() {}
  handleOpenMenu() {
    this.isUserMenuHidden = !this.isUserMenuHidden;
  }
  ngOnInit(): void {}
}
