import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [NgStyle,MatIconModule,MatButtonModule, MatDividerModule],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {

  // image="https://4kwallpapers.com/images/walls/thumbs_3t/7712.jpg";
  image="https://cdn.mos.cms.futurecdn.net/jZbskesRhzALfcqHx9eiDb-1200-80.jpg";

}