import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LucideAngularModule, MapPin, Calendar, Flag, GraduationCap, MessageCircleHeart, Building2 } from 'lucide-angular';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatIconModule, LucideAngularModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly MapPin = MapPin;
  readonly Calendar = Calendar;
  readonly Flag = Flag;
  readonly GraduationCap = GraduationCap;
  readonly MessageCircleHeart = MessageCircleHeart;
  readonly Building2 = Building2;

  profile = {
    name: 'Abo',
    lastName: 'ut me',
    description: `
      I am an athlete at heart with an entrepreneurial spirit, a knack for Website develop, and a passion for coding.
      Born in Syria, where I work as a Front End developer for JOYBOX, alongside my many ongoing projects.
      
      Outside of work, I am an avid Cars enthusiast, I love to travel and lead a beautiful lifestyle.
    `,
    location: 'Syria, Damascus',
    age: 23,
    nationality: 'Syria, Damascus',
    interests: ['Cars', 'Travel', 'Programming'],
    study: 'Arab International University | AIU',
    employment: 'JOYBOX',
    profileImage: './assets/images/me2.jpg',
  };

}
