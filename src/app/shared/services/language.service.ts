import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly LANGUAGE_STORAGE_KEY = 'app_language_isEnglish';
  private isEnglishSubject: BehaviorSubject<boolean>;
  public isEnglish$: Observable<boolean>;

  constructor() {
    const savedLanguage = localStorage.getItem(this.LANGUAGE_STORAGE_KEY);
    const initialValue =
      savedLanguage !== null ? savedLanguage === 'true' : false;

    this.isEnglishSubject = new BehaviorSubject<boolean>(initialValue);
    this.isEnglish$ = this.isEnglishSubject.asObservable();
  }

  /**
   * Sets the language preference and updates the local storage and BehaviorSubject.
   * @param isEnglish - Boolean indicating if the language is English.
   */
  setLanguage(isEnglish: boolean): void {
    localStorage.setItem(this.LANGUAGE_STORAGE_KEY, isEnglish.toString());
    this.isEnglishSubject.next(isEnglish);
  }

  /**
   * Toggles the language preference between English and another language.
   */
  toggleLanguage(): void {
    const currentValue = this.isEnglishSubject.value;
    this.setLanguage(!currentValue);
  }

  /**
   * Gets the current language preference.
   * @returns Boolean indicating if the language is English.
   */
  getCurrentLanguage(): boolean {
    return this.isEnglishSubject.value;
  }
}
