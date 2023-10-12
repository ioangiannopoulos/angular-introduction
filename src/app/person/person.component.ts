import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  person = {
    givenName: "Giannis",
    surName: "Giannopoulos",
    age: 0x24,
    email: "hulkgr1987@aueb.gr"
  };
}
