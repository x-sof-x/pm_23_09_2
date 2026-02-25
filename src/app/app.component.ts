import { Component } from '@angular/core';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainContentComponent, SidebarComponent], // підключаємо обидва
  templateUrl: './app.component.html',
})
export class AppComponent {
  // дані для сайдбару можна передати звідси
  aboutMe: string = 'Lorem ipsum dolor sit amet...';
  hobbies = [
    { icon: 'fas fa-globe-americas', title: 'Travel' },
    { icon: 'fas fa-headphones', title: 'Music' },
    { icon: 'fas fa-file-edit', title: 'Writing' },
    { icon: 'fas fa-chess-knight', title: 'Chess' }
  ];
}