import { Component, signal } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'app-usercreationform',
  imports: [DialogModule],
  templateUrl: './usercreationform.html',
  styleUrl: './usercreationform.css',
})
export class Usercreationform {

  visibility = signal<boolean>(true);




  onButtonClick() {
    this.visibility.set(false);
  }

  get visible() {
    return this.visibility();
  }
}
