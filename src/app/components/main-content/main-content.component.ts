import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  standalone: true,
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {
  firstName: string = 'JHON';
  lastName: string = 'ABIRAR';
  position: string = 'UI DESIGNER';

  contactInfo = {
    phone: '+000 123 456 789',
    email: 'username@gmail.com',
    area: 'Your Street Address Here'
  };

  education = [
    { major: 'Computer Science', uni: 'University A', years: '2005–2009' },
    { major: 'Software Engineering', uni: 'University B', years: '2009–2011' }
  ];

  experiences = [
    { title: 'Enter Job Position Here', company: 'Company Name / Location', date: 'Present', description: 'Lorem Ipsum dolor sit amet...' },
    { title: 'Enter Job Position Here', company: 'Company Name / Location', date: '2017 - 2019', description: 'Lorem Ipsum dolor sit amet...' }
  ];

  expertise = [
    { title: 'Adobe Photoshop', percentClass: 'p90' },
    { title: 'Adobe Illustrator', percentClass: 'p85' },
    { title: 'Adobe Indesign', percentClass: 'p75' },
    { title: 'Power Point', percentClass: 'p80' }
  ];
}