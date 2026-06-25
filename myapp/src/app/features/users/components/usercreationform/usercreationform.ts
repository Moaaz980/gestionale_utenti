import { Component, signal } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';



@Component({
  selector: 'app-usercreationform',
  imports: [DialogModule , ButtonModule],
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
