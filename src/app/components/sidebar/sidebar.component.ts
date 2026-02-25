import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input() photoUrl: string = 'assets/img/img1.png';

  @Input() aboutMe: string =
    'Lorem Ipsum dolor o consectetur adipiscing elitse eiusmod tempor incididunt labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus facilisiis.';

  @Input() hobbies: { icon: string; title: string }[] = [
    { icon: 'fas fa-globe-americas', title: 'Travel' },
    { icon: 'fas fa-headphones', title: 'Music' },
    { icon: 'fas fa-file-edit', title: 'Writing' },
    { icon: 'fas fa-chess-knight', title: 'Chess' }
  ];
}