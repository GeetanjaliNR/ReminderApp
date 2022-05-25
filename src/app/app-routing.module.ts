import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { ExistingEventFormComponent } from './existing-event-form/existing-event-form.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'viewevent',
    component: ViewEventComponent,
  },
  {
    path: 'deleteevent',
    component: DeleteEventComponent,
  },
  {
    path: 'existingFormUpdate',
    component: ExistingEventFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
