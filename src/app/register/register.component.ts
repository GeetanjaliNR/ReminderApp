import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataServiceService } from '../service/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    userid: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  });

  constructor(
    private fb: FormBuilder,
    private ds: DataServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  register() {
    let uname = this.registerForm.value.uname;
    let userid = this.registerForm.value.userid;
    let pswd = this.registerForm.value.pswd;

    if (this.registerForm.valid) {
      this.ds.register(uname, userid, pswd).subscribe(
        (result: any) => {
          if (result) {
            alert(result.message);
            this.router.navigateByUrl('login');
          }
        },
        (result: any) => {
          alert(result.error.message);
          this.router.navigateByUrl('login');
        }
      );
    } else {
      alert('form invalid');
    }
  }
}
