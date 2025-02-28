import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LanguageService } from '../../shared/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  checkboxChecked = false
  isEnglish = true;
  private languageService = inject(LanguageService);
  private subscription: Subscription = new Subscription();

  changeCheckbox(){
    if(!this.checkboxChecked){
      this.checkboxChecked = true;
    } else{
      this.checkboxChecked = false;
    }
  }

  showSnackbar(){
    let snackbar = document.getElementById("snackbar");
    snackbar?.classList.add('show');
    setTimeout(function(){snackbar?.classList.remove('show');}, 3000);
  }

  ngOnInit(): void {
     // Get initial value
     this.isEnglish = this.languageService.getCurrentLanguage();
    
     // Subscribe to changes
     this.subscription = this.languageService.isEnglish$.subscribe(isEnglish => {
       this.isEnglish = isEnglish;
     });
  }

  ngOnDestroy(): void {
    // Clean up subscription to prevent memory leaks
    this.subscription.unsubscribe();
  }

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message:"",
  }

  mailTest = false;

  post = {
    endPoint: 'https://sandor-balazsi.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => this.showSnackbar(),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }
}
