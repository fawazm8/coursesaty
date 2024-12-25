import { Component, OnInit } from '@angular/core';
import { IntroPlatformService } from '../../core/services/intro-platform.service';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../core/safe-url.pipe';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
  standalone: true,
  imports: [CommonModule, SafeUrlPipe], // إضافة الـ Pipes والموديلات الضرورية
})
export class MainLayoutComponent implements OnInit {
  introData: any;

  constructor(private introService: IntroPlatformService) {}

  ngOnInit(): void {
    this.introService.getIntroData().subscribe(
      (data) => {
        console.log('Data received:', data);
        if (data && data.length > 0) {
          this.introData = data[0]; // تأكد من أن البيانات موجودة
        }
      },
      (error) => {
        console.error('Error fetching intro data:', error);
      }
    );
  }
}
