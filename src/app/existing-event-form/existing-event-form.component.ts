import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataServiceService } from '../service/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-existing-event-form',
  templateUrl: './existing-event-form.component.html',
  styleUrls: ['./existing-event-form.component.css'],
})
export class ExistingEventFormComponent implements OnInit {
  // @Input() enableEditOn: any | undefined;

  // @Output() editCancel = new EventEmitter();

  toUpdateEvent = {};
  reminderId = '';

  // testObj = {
  //   eventName: 'ryan',
  //   reminderTime: '2022-05-25T01:44',
  //   description: 'test',
  // };

  existingEventForm = this.fb.group({
    eventName: [
      '',
      [Validators.required, Validators.pattern("[a-zA-Z0-9' ]*")],
    ],
    reminderTime: [''],
    description: [
      '',
      [Validators.required, Validators.pattern("[a-zA-Z0-9' ]*")],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private ds: DataServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('reminderId')) {
      this.reminderId = JSON.parse(localStorage.getItem('reminderId') || '');
    }

    //loading the form with the existing event values
    this.ds.getRequiredEvent(this.reminderId).subscribe((result: any) => {
      if (result) {
        const { eventName, reminderTime, description } = result.message[0];
        this.existingEventForm.setValue({
          eventName,
          reminderTime,
          description,
        });
      }
    });
  }

  toHome() {
    this.router.navigateByUrl('dashboard');
  }

  getDetails() {
    if (localStorage.getItem('toUpdateEvent')) {
      this.toUpdateEvent = JSON.parse(
        localStorage.getItem('toUpdateEvent') || ''
      );
      console.log(localStorage.getItem('toUpdateEvent'));
      console.log(this.toUpdateEvent);
    }
  }

  cancelEdit() {
    localStorage.removeItem('toUpdateEvent');
    localStorage.removeItem('reminderId');
    this.router.navigateByUrl('viewevent');
  }

  saveNewEvent() {
    let id = this.reminderId;
    let eventName = this.existingEventForm.value.eventName;
    let eventOccurTime = this.existingEventForm.value.reminderTime;
    let eventDesc = this.existingEventForm.value.description;
    // let currentUserid = JSON.parse(localStorage.getItem('currentUserid') || '');
    console.log(id, eventName, eventOccurTime, eventDesc);

    if (this.existingEventForm.valid) {
      this.ds
        .saveUpdatedEvent(id, eventName, eventOccurTime, eventDesc)
        .subscribe(
          (result: any) => {
            if (result) {
              alert(result.message);
              this.router.navigateByUrl('viewevent');
            }
          },
          (result: any) => {
            alert(result.error.message);
            this.router.navigateByUrl('viewevent');
          }
        );
    } else {
      alert('invalid form');
    }
  }
}
