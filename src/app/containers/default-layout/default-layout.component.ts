import {Component, OnInit} from '@angular/core';
import { UsersService } from '../../../core/services/users.service';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {

  constructor(private userService : UsersService)
  {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe();
  }

  public sidebarMinimized = false;
  public navItems = navItems;
  
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
