import {Component, OnInit} from '@angular/core';
import {SettingsService} from '../../../core/settings/settings.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {ActivatedRoute, Router} from '@angular/router';
import {UserApi} from '../../../shared/sdk/services';
import {AccessToken, User} from '../../../shared/sdk/models';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  valForm: FormGroup;
  private returnUrl: string;
  public user: User = new User();

  constructor(public settings: SettingsService, fb: FormBuilder, private userApi: UserApi, private route: ActivatedRoute, private router: Router) {

    this.valForm = fb.group({
      'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
      'password': [null, Validators.required]
    });

  }

  submitForm($ev, user: any) {
    $ev.preventDefault();
    for (let c in this.valForm.controls) {
      this.valForm.controls[c].markAsTouched();
    }
    if (this.valForm.valid) {
      console.log('Valid!');
      console.log(user);
      this.userApi.login(user).subscribe(
        (token: AccessToken) => {
          // console.log('New token: ', token);

          // Update the last login date
          this.userApi.patchAttributes(
            token.userId,
            {
              'loggedAt': new Date()
            }
          ).subscribe();
          // Redirect to the /dashboard
          this.router.navigateByUrl(this.returnUrl);
        }, err => {
          console.log(err);
        });

    }
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

}
