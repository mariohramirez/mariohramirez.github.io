import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bigname',
  standalone: true,
  imports: [],
  templateUrl: './bigname.component.html',
  styleUrl: './bigname.component.css'
})
export class BignameComponent {
  @Input() title: String = 'Mario Ramirez—Software Engineer—Mario Ramirez—Software Engineer—';
  @Input() bottomPosition: string = '10vh'; // Valor por defecto
}
