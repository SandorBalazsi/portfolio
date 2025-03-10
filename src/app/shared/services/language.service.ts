import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly LANGUAGE_STORAGE_KEY = 'app_language_isEnglish';
  private isEnglishSubject: BehaviorSubject<boolean>;
  public isEnglish$: Observable<boolean>;

  constructor() {
    const savedLanguage = localStorage.getItem(this.LANGUAGE_STORAGE_KEY);
    const initialValue = savedLanguage !== null ? savedLanguage === 'true' : false;
    
    this.isEnglishSubject = new BehaviorSubject<boolean>(initialValue);
    this.isEnglish$ = this.isEnglishSubject.asObservable();
  }

  setLanguage(isEnglish: boolean): void {
    // Save to localStorage
    localStorage.setItem(this.LANGUAGE_STORAGE_KEY, isEnglish.toString());
    // Update the BehaviorSubject
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