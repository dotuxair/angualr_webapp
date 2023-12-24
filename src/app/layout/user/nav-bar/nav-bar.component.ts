import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  isHome: boolean = true;
  isWallet: boolean = false;
  isTeam: boolean = false;
  isProfile: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    const urlString: string = this.router.url;
    const parts: string[] = urlString.split('/');
    const pageName: string = parts[parts.length - 1];
    // if (pageName === 'home') {
    //   this.isHome = true;
    // }
  }
}
