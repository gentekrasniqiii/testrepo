import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
// Zod for validation
import { z } from 'zod';
// Interface
import { User } from '../interface/user';

const userSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .regex(/\d/, { message: 'Password must include a number.' })
    .regex(/[A-Z]/, { message: 'Password must include an uppercase letter.' })
    .regex(/[a-z]/, { message: 'Password must include a lowercase letter.' })
    .min(8, { message: 'Password must be at least 8 characters.' }),
});

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  private form = inject(FormBuilder);
  private userService = inject(UserService);
  private router = inject(Router);

  signInForm: FormGroup = this.form.group({
    email: [''],
    password: [''],
  });

  users: User[] = [];

  ngOnInit(): void {
    this.loadUserData();
  }

  message: string = '';
  messageType: string = '';

  async loadUserData(): Promise<void> {
    try {
      this.users = await this.userService.getUsers();
    } catch (error) {
      this.message = 'Error fetching user data.';
      this.messageType = 'danger';
    }
  }

  // Specific error messages
  emailError: string = '';
  passwordError: string = '';

  onSubmit(): boolean {
    const formData = this.signInForm.value;
    const validationResult = userSchema.safeParse(formData);

    if (!validationResult.success) {
      validationResult.error.errors.forEach((e) => {
        if (e.path.includes('email')) {
          this.emailError = e.message;
        }
        if (e.path.includes('password')) {
          this.passwordError = e.message;
        }
      });
      return false;
    }
    const checkUser = this.users.some(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );
    if (checkUser) {
      this.router.navigate(['/dashboard']);
      //Here was displayed the message that you are logged in but replaced through ridirecting
    } else {
      this.message = 'This user does not exist in our storage.';
      this.messageType = 'danger';
    }
    // Clear the message after 2 seconds
    setTimeout(() => {
      this.message = '';
    }, 2000);
    return true;
  }
}
