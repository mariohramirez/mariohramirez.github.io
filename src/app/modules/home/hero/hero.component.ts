import { Component } from '@angular/core';
import { NavbarComponent } from "../../layout/components/navbar/navbar.component";
import { BignameComponent } from "./components/bigname/bigname.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [BignameComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
