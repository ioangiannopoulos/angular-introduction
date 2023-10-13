import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';
import { PersonAltComponent } from './person-alt/person-alt.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent, PersonAltComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Giannis";
  lastname: string = "Giannopoulos";

  person: Person = {
    givenName: "Giannis",
    surName: "Giannopoulos",
    age: 0x24,
    email: "hulkgr1987@aueb.gr",
    address: "Patras, Greece"
  };

  person2: Person = {
    givenName: "Leo",
    surName: "Yiammies",
    age: 0x24,
    email: "louploup1987@aueb.gr",
    address: "Patras, Greece"
  };




}
