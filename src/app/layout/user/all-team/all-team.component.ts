import { Component } from '@angular/core';

@Component({
  selector: 'app-all-team',
  templateUrl: './all-team.component.html',
  styleUrl: './all-team.component.css'
})
export class AllTeamComponent {
  userPayId: string = "2737578585";
  copyStatus: boolean = false;
  link = 'http://localhost:4200/auth/register?referredBy='+this.userPayId;
  data = [1,2,3];

  copyToClipBoard(value: string) {
    navigator.clipboard.writeText(value).then().catch(e => console.error(e));
    this.copyStatus = true;
    this.someSecondsLater();
  }
  someSecondsLater(){
    setTimeout(() => {
      this.copyStatus = false;
    }, 10000);
  }
}
