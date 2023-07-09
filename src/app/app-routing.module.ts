import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfilesComponent } from './profiles/profiles.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path: '',
  },
  {
    component: ProfilesComponent,
    path: 'profiles',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
