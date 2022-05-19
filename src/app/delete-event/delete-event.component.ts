import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css'],
})
export class DeleteEventComponent implements OnInit {
  @Input() toDeleteEventId: any | undefined;

  @Output() onCancel = new EventEmitter();

  @Output() deleteEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  cancel() {
    this.onCancel.emit();
    console.log('test');
  }

  delete() {
    this.deleteEvent.emit(this.toDeleteEventId);
  }
}
