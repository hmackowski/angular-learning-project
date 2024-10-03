import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component'; // Import NavbarComponent here

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true, // Define it as standalone
  imports: [NavbarComponent] // Import NavbarComponent here
})
export class AppComponent {
  title = 'angular-app';
}
