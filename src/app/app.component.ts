import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Giannis";
  lastname: string = "Giannopoulos";

  person = {
    givenName: "Giannis",
    surName: "Giannopoulos",
    age: "36",
    email: "hulkgr1987@aueb.gr"
  };
}
