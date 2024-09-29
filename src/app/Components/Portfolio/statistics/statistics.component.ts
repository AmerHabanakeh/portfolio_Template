import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LucideAngularModule, Star, SmilePlus, FlaskConical, PanelsTopLeft } from 'lucide-angular';


@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent implements OnInit {
  readonly Star = Star
  readonly SmilePlus = SmilePlus
  readonly FlaskConical = FlaskConical
  readonly PanelsTopLeft = PanelsTopLeft

  starsCount = 0;
  ngOnInit(): void {
    // this.getStarsFromMyGit()
  }

  constructor() {
    // this.getStarsFromMyGit();
  }

  // getStarsFromMyGit() {
  //   this.http.get(`https://api.github.com/users/AmerHabanakeh/repos`).subscribe((res: any) => {
  //   })
  // }

  stats = [
    { icon: Star, label: 'Github stars', value: this.starsCount },
    { icon: SmilePlus, label: 'Happy clients', value: 3 },
    { icon: FlaskConical, label: 'Years of experience', value: 2 },
    { icon: PanelsTopLeft, label: 'OSS Projects', value: 5 }
  ];

}
