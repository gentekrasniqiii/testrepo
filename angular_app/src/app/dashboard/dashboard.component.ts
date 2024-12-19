// dashboard.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../service/user.service';
import { CommonModule } from '@angular/common';
import { User } from '../interface/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [CommonModule],
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  message: string = '';
  messageType: string = '';
  private userService = inject(UserService);

  ngOnInit(): void {
    this.loadUserData();
  }

  // Call the UserService to fetch users
  async loadUserData(): Promise<void> {
    try {
      this.users = await this.userService.getUsers();
    } catch (error) {
      this.message = 'Error fetching user data.';
      this.messageType = 'danger';
    }
  }
}
