import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  newPassword = '';
  newPasswordConfirm = '';
  passwordCheck = true;
  passwordEmpty = false;
  constructor(private authService: AuthService) {}

  user = {
    email: '',
    password: ''
  };

  ngOnInit() {
    scroll(0, 0);
  }
  // onSubmit(form) {
  //   if (this.newPassword !== this.newPasswordConfirm) {
  //     this.passwordCheck = false;
  //   } else {
  //     this.passwordCheck = true;
  //   }
  //   if (this.newPassword === '' || this.newPasswordConfirm === '') {
  //     this.passwordEmpty = true;
  //   } else {
  //     this.passwordEmpty = false;
  //   }
  //   console.log(this.passwordCheck);
  // }
  resetPassword() {
    if (this.user.password !== this.newPasswordConfirm) {
      this.passwordCheck = false;
    } else {
      this.passwordCheck = true;
    }
    if (this.user.password === '' || this.newPasswordConfirm === '') {
      this.passwordEmpty = true;
    } else {
      this.passwordEmpty = false;
    }

    if (this.passwordCheck && !this.passwordEmpty) {
      this.authService.retrievePassword(this.user).subscribe((data: any) => {});
    }
  }
}