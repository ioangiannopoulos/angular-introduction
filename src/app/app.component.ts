import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';
import { PersonAltComponent } from './person-alt/person-alt.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { OutputDemoComponent } from './output-demo/output-demo.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AppService } from './app.service';
import { CrudDemoComponent } from "./crud-demo/crud-demo/crud-demo.component";
import { ApplicationLayoutComponent } from './application-layout/application-layout.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule,
        PersonComponent,
        PersonAltComponent,
        EventBindComponent,
        OutputDemoComponent,
        PersonCardComponent,
        TemplateDrivenFormComponent,
        ReactiveFormComponent,
        CrudDemoComponent,
        ApplicationLayoutComponent]
})
export class AppComponent implements OnInit {
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

  users: Person[] = [];

  sentUser: Person | undefined;

  constructor(private appService: AppService = Inject(AppService)) {}

  ngOnInit(): void {
    this.appService.getAllUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    })
  }

  onDeleteUser(i: number) {
    this.users.splice(i, 1);
  }

  onSendUser(user: Person) {
    console.log(user);
    this.sentUser = user;
  }

  onNewPerson(person: Person) {
    this.users.push(person);
  }
}
