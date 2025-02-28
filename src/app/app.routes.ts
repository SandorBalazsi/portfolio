import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { HomeComponent } from './main-content/home/home/home.component';


export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path : 'imprint', component: ImprintComponent},
  { path : 'legal-notice', component: LegalNoticeComponent},
];
