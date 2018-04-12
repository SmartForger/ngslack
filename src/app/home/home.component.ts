import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { User } from '../core/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  user: User;
  user$: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user$ = this.userService.user.subscribe(u => {
      this.user = u;
    });
  }

  ngOnDestroy() {
    this.user$.unsubscribe();
  }

}
