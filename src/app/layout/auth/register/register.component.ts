import { Component } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  referralId : string = '';
  constructor( private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.referralId = this.route.snapshot.queryParams['referredBy'] || "";
  }

}
