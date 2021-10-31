import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {NotificationService} from '../../service/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public registerForm: FormGroup;

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.registerForm = this.createRegisterForm();
  }

  createRegisterForm(): FormGroup {
    return this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      userName: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      company: ['', Validators.compose([Validators.required])],
      jobTitle: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required])],
    });
  }

  submit(): void {
    console.log(this.registerForm.value);

    this.authService.register({
      email: this.registerForm.value.email,
      userName: this.registerForm.value.userName,
      name: this.registerForm.value.name,
      lastName: this.registerForm.value.lastName,
      company: this.registerForm.value.company,
      jobTitle: this.registerForm.value.jobTitle,
      password: this.registerForm.value.password,
      confirmPassword: this.registerForm.value.confirmPassword,
    }).subscribe(data => {
      console.log(data);
      this.notificationService.showSnackBar('Successfully Registered!');
    }, error => {
      console.log(error);
      this.notificationService.showSnackBar('Something went wrong during registration');
    });
  }

}
