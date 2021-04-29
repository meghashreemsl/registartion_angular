import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegComponent } from './components/reg/reg.component';
import { RegistrationComponent } from './components/registration/registration.component';


const routes: Routes = [
  {path:'registration',component:RegistrationComponent},
  { path: '', redirectTo: 'registration', pathMatch: 'full' },
  {path:'create',component:RegComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
