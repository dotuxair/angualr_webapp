import { Component } from '@angular/core';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrl: './send-money.component.css'
})
export class SendMoneyComponent {
  userPayId: string = "2737578585";
  copyStatus: boolean = false;
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

