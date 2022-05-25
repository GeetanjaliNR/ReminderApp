import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user: any;
  loginDate: any;
  userId: any;

  constructor(private fb: FormBuilder, private router: Router) {
    if (localStorage.getItem('currentUser')) {
      this.user = JSON.parse(localStorage.getItem('currentUser') || '');
    }

    this.loginDate = new Date();
  }

  ngOnInit(): void {
    if (!localStorage.getItem('currentUserid')) {
      alert('Session expired!! Please login..');
      this.router.navigateByUrl('');
    }
  }

  // 1- to display new event form
  createEvent() {
    this.userId = JSON.parse(localStorage.getItem('currentUserid') || '');
  }

  onCancel() {
    this.userId = '';
  }

  // 2- to display existing event
  viewEvents() {
    this.router.navigateByUrl('viewevent');
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserid');
    localStorage.removeItem('toUpdateEvent');
    localStorage.removeItem('reminderId');
    localStorage.removeItem('token');
    this.router.navigateByUrl('');
  }
}
