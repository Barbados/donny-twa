import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import WebApp from '@twa-dev/sdk';
import { PatientsListComponent } from '../patients/patients-list/patients-list.component';

@Component({
  selector: 'donny-twa-home',
  standalone: true,
  imports: [CommonModule, PatientsListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  showTgAlert() {
    WebApp.showAlert('Hey!');
  }
}
