// user.service.ts
import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root', // This ensures the service is available throughout the app
})
export class UserService {
  constructor() {}

  // Fetch data from the JSON file
  async getUsers(): Promise<User[]> {
    try {
      const response = await fetch('./assets/data/users.json');
      return await response.json(); // Returns the parsed JSON as an array of users
    } catch (error) {
      throw new Error('Error fetching user data');
    }
  }
}
