import { Component } from '@angular/core';
import { MenuOptionComponent } from "./menu-option/menu-option.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenuOptionComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
