import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  heading: string = '';
  desc: string = '';

  //Imported here the function to fetch data from txt file
  ngOnInit(): void {
    this.getTextFromFile('assets/data/data.txt');
  }
  async getTextFromFile(file: string) {
    const response = await fetch(file);
    const myText = await response.text();

    const lines = myText.split('\n');
    this.heading = lines[0];
    this.desc = lines[1];
  }
}
