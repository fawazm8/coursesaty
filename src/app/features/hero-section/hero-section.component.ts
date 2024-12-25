import { Component, OnInit } from '@angular/core';
import { IntroPlatformService } from '../../core/services/intro-platform.service';

import { NgIf } from '@angular/common'; // استيراد NgIf
import { SafeUrlPipe } from '../../core/safe-url.pipe';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [NgIf, SafeUrlPipe], // إضافة NgIf هنا
  template: `
    <div *ngIf="introData">
      <h1>{{ introData.Title }}</h1>
      <p>{{ introData.Description }}</p>
      <div class="laptop-frame">
        <iframe
          [src]="introData.VideoUrl | safeUrl"
          width="800"
          height="450"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  `,
  styles: [
    `
      .laptop-frame {
        background: url('/assets/laptop-frame.png') no-repeat center;
        background-size: contain;
        width: 900px;
        height: 600px;
        margin: auto;
      }
      .laptop-frame iframe {
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class HeroSectionComponent implements OnInit {
  introData: any;

  constructor(private introService: IntroPlatformService) {}

  ngOnInit(): void {
    this.introService.getIntroData().subscribe((data) => {
      console.log('Data fetched:', data);
      this.introData = data[0];
    });
  }
}
