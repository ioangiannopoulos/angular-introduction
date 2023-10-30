import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from './interfaces/person';
import { AppService } from './app.service';
import { ApplicationLayoutComponent } from './application-layout/application-layout.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, ApplicationLayoutComponent]
})
export class AppComponent {}
