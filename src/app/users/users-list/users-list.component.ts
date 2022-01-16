import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { User } from '../../../core/models/user.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[];
  constructor(private http: HttpClient) {   }

  ngOnInit(): void {
    this.http.get<User[]>(environment.apiUrl+'api/Users')
    .pipe(take(1))
    .subscribe(res => {
        this.users = res.map(user => {
          user.createdDate = new Date(user.createdDate).toLocaleString();
          return user;
        });
    });
  }

}
