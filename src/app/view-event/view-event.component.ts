import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';
import { Router } from '@angular/router';
import { ExistingEventFormComponent } from '../existing-event-form/existing-event-form.component';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css'],
})
export class ViewEventComponent implements OnInit {
  events: any;
  userid: any;
  eventId: any;
  editEventId: any;

  constructor(private ds: DataServiceService, private router: Router) {
    this.userid = JSON.parse(localStorage.getItem('currentUserid') || '');

    this.ds.viewEvent(this.userid).subscribe(
      (result: any) => {
        this.events = result.message;
        // console.log(this.events[0]);
      },
      (result: any) => {
        alert(result.error.message);
      }
    );
  }

  ngOnInit(): void {}

  toHome() {
    this.router.navigateByUrl('dashboard');
  }

  // delete event
  onDelete(event: any) {
    this.eventId = (event.target.closest('button') as Element).id;

    console.log(this.eventId);
  }

  onCancel() {
    this.eventId = '';
    console.log(this.eventId);
  }

  deleteEvent(event: any) {
    this.ds.deleteEvent(event).subscribe(
      (result: any) => {
        if (result) {
          alert(result.message);
          this.ds.viewEvent(this.userid).subscribe((result: any) => {
            this.events = result.message;
          });
          this.onCancel();
        }
      },
      (result: any) => {
        alert(result.error.message);
        this.router.navigateByUrl('login');
      }
    );
  }

  // edit event
  onEdit(event: any) {
    this.editEventId = (event.target.closest('button') as Element).id;

    localStorage.setItem('reminderId', JSON.stringify(this.editEventId));

    this.ds.getRequiredEvent(this.editEventId).subscribe((result: any) => {
      if (result) {
        const { eventName, reminderTime, description } = result.message[0];
        // console.log(eventName, reminderTime, description);
        localStorage.setItem(
          'toUpdateEvent',
          JSON.stringify({ eventName, reminderTime, description })
        );
      }
    });

    this.router.navigateByUrl('existingFormUpdate');
  }

  // editCancel() {
  //   this.editEventId = '';
  // localStorage.removeItem('toUpdateEvent');
  // }
}
