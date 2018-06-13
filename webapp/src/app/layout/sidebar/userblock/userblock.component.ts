import { Component, OnInit } from '@angular/core';

import { UserblockService } from './userblock.service';
import {User} from '../../../shared/sdk/models';
import {UserApi} from '../../../shared/sdk/services/custom';

@Component({
    selector: 'app-userblock',
    templateUrl: './userblock.component.html',
    styleUrls: ['./userblock.component.scss']
})
export class UserblockComponent implements OnInit {
    //user: any;
    private user: User;

    //public user: User = new User();

    constructor(public userblockService: UserblockService, private userApi: UserApi,) {


    }

    ngOnInit() {
      this.user = this.userApi.getCachedCurrent();
      console.log(this.user);
    }

    userBlockIsVisible() {
        return this.userblockService.getVisibility();
    }

}
