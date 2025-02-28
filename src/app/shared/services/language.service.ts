import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private isEnglishSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public isEnglish$: Observable<boolean> = this.isEnglishSubject.asObservable();

  constructor() {
  }

  setLanguage(isEnglish: boolean): void {
    this.isEnglishSubject.next(isEnglish);
  }

  toggleLanguage(): void {
    const currentValue = this.isEnglishSubject.value;
    this.setLanguage(!currentValue);
  }

  getCurrentLanguage(): boolean {
    return this.isEnglishSubject.value;
  }
}