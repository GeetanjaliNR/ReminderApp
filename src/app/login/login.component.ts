import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataServiceService } from '../service/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    userid: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  });

  constructor(
    private fb: FormBuilder,
    private ds: DataServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    let userid = this.loginForm.value.userid;
    let pswd = this.loginForm.value.pswd;

    if (this.loginForm.valid) {
      this.ds.login(userid, pswd).subscribe(
        (result: any) => {
          if (result) {
            //storing username to localstorage
            localStorage.setItem(
              'currentUser',
              JSON.stringify(result.currentUser)
            );
            //storing userid to localstorage
            localStorage.setItem(
              'currentUserid',
              JSON.stringify(result.currentUserid)
            );
            //storing token to localstorage
            localStorage.setItem('token', JSON.stringify(result.token));

            alert(result.message);
            this.router.navigateByUrl('dashboard');
          }
        },
        (result: any) => {
          alert(result.error.message);
        }
      );
    } else {
      alert('Form invaldid!!');
    }
  }
}
