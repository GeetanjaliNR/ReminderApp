import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-new-event-form',
  templateUrl: './new-event-form.component.html',
  styleUrls: ['./new-event-form.component.css'],
})
export class NewEventFormComponent implements OnInit {
  @Input() createNewEvent: number | undefined;

  @Output() onCancel = new EventEmitter();

  //reactive model form for new Event
  newEventForm = this.fb.group({
    eventName: [
      '',
      [Validators.required, Validators.pattern("[a-zA-Z0-9' ]*")],
    ],
    eventOccurTime: [''],
    eventDesc: [
      '',
      [Validators.required, Validators.pattern("[a-zA-Z0-9' ]*")],
    ],
  });
  constructor(private fb: FormBuilder, private ds: DataServiceService) {}

  ngOnInit(): void {}

  cancel() {
    this.onCancel.emit();
  }

  saveNewEvent() {
    let eventName = this.newEventForm.value.eventName;
    let eventOccurTime = this.newEventForm.value.eventOccurTime;
    let eventDesc = this.newEventForm.value.eventDesc;
    let currentUserid = JSON.parse(localStorage.getItem('currentUserid') || '');
    // console.log(currentUserid, eventName, eventOccurTime, eventDesc);

    if (this.newEventForm.valid) {
      this.ds
        .saveNewEvent(currentUserid, eventName, eventOccurTime, eventDesc)
        .subscribe(
          (result: any) => {
            if (result) {
              alert(result.message);
              this.cancel();
            }
          },
          (result: any) => {
            alert(result.error.message);
          }
        );
    } else {
      alert('invalid form');
    }
  }
}
