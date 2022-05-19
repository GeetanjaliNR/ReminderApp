import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { NewEventFormComponent } from './new-event-form/new-event-form.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { ExistingEventFormComponent } from './existing-event-form/existing-event-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    NewEventFormComponent,
    ViewEventComponent,
    DeleteEventComponent,
    EditEventComponent,
    ExistingEventFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
