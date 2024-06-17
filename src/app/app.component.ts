import { Component } from '@angular/core';
import { SellarService } from './services/sellar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-com';
  constructor(private sellarService: SellarService) {

  }

}
