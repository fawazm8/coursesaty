import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IntroPlatformService {
  private apiUrl = 'https://localhost:7151/api/IntroPlatforms'; // تأكد من صحة الرابط

  constructor(private http: HttpClient) {}

  getIntroData(): Observable<any> {
    return this.http.get<any>(this.apiUrl); // تأكد من أن الخدمة تعيد البيانات الصحيحة
  }
}
