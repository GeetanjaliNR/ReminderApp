import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css'],
})
export class EditEventComponent implements OnInit {
  @Input() toEditEventId: any | undefined;

  @Output() toEditOnCancel = new EventEmitter();

  @Output() toEditConfirm = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  cancel() {
    this.toEditOnCancel.emit();
  }

  onUpdate() {
    this.toEditConfirm.emit(this.toEditEventId);
  }
}
