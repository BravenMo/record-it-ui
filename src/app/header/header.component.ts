import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isLoggedIn!: boolean;
  accountText: string = "Log In"

  ngOnInit(): void {
      this.isLoggedIn=false;
  }

  changeName(){
    console.log("Button clicked");
    this.accountText="Mohit Varma";
  }
}
