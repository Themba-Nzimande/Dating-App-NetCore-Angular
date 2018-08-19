import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/User';
import { Injectable } from '@angular/core';
import { UserService } from '../_services/User.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class MemberListResolver implements Resolve<User[]> {
    pageSize = 5;
    pageNumber = 1;

    constructor(private userService: UserService, private router: Router, private alterify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
        return this.userService.getUsers(this.pageNumber, this.pageSize).catch(error => {
            this.alterify.error('Users list data retrieval cocked up');
            this.router.navigate(['/home']);
            return Observable.of(null);
        });
    }
}
