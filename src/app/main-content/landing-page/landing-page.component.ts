import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  /**
   * Generates a mailto link with the specified email address and subject.
   * @param emailAddress - The email address to send the mail to.
   * @param emailSubject - The subject of the email.
   * @returns A string representing the mailto link.
   */
  mailto(emailAddress: string, emailSubject: any) {
    return 'mailto:' + emailAddress + '?subject=' + emailSubject;
  }
}
