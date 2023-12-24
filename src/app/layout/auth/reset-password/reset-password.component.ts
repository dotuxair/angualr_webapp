import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
    emailSent = false; // means fasle in JS

    sendEmail(){
      this.emailSent = true;
    }
}
