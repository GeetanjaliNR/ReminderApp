import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-existing-event-form',
  templateUrl: './existing-event-form.component.html',
  styleUrls: ['./existing-event-form.component.css'],
})
export class ExistingEventFormComponent implements OnInit {
  @Input() enableEditOn: any | undefined;

  @Output() editCancel = new EventEmitter();

  toUpdateEvent = {};

  testObj = {
    eventName: 'ryan',
    reminderTime: '2022-05-25T01:44',
    description: 'test',
  };

  existingEventForm = this.fb.group(this.testObj);

  constructor(private fb: FormBuilder, private ds: DataServiceService) {
    // if (localStorage.getItem('toUpdateEvent')) {
    //   this.toUpdateEvent = JSON.parse(
    //     localStorage.getItem('toUpdateEvent') || ''
    //   );
    //   console.log(localStorage.getItem('toUpdateEvent'));
    //   console.log(this.toUpdateEvent);
    // }
  }

  ngOnInit(): void {
    // this.existingEventForm = this.fb.group(this.toUpdateEvent);
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
    this.editCancel.emit();
    localStorage.removeItem('toEditEventId');
  }

  // toEditUser(updateEventId: any) {}

  saveNewEvent() {
    let eventName = this.existingEventForm.value.eventName;
    let eventOccurTime = this.existingEventForm.value.eventOccurTime;
    let eventDesc = this.existingEventForm.value.eventDesc;
    let currentUserid = JSON.parse(localStorage.getItem('currentUserid') || '');
    // console.log(currentUserid, eventName, eventOccurTime, eventDesc);

    //   if (this.existingEventForm.valid) {
    //     this.ds
    //       .saveNewEvent(currentUserid, eventName, eventOccurTime, eventDesc)
    //       .subscribe(
    //         (result: any) => {
    //           if (result) {
    //             alert(result.message);
    //             this.cancel();
    //           }
    //         },
    //         (result: any) => {
    //           alert(result.error.message);
    //         }
    //       );
    //   } else {
    //     alert('invalid form');
    //   }
  }
}
