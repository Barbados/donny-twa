import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import WebApp from '@twa-dev/sdk';

@Component({
  selector: 'donny-twa-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  showTgAlert() {
    WebApp.showAlert('Hey!')
  }
}
