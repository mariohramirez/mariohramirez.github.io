import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-option',
  standalone: true,
  imports: [],
  templateUrl: './menu-option.component.html',
  styleUrl: './menu-option.component.css'
})
export class MenuOptionComponent {
 @Input() text: string = '';
  @Input() link: string = '#';
  @Input() textColor: string = '#454445'; // Color inicial (blanco por defecto)
  @Input() hoverColor: string = '#fbcb0d'; // Color final (amarillo Tailwind por defecto)
  @Input() staggerDelay: number = 75; // ms entre letras

  get chars(): string[] {
    return this.text.split('');
  }

  getDelayClass(index: number): string {
    const delays = [
      'delay-0',
      'delay-75',
      'delay-100',
      'delay-150',
      'delay-200',
      'delay-250',
      'delay-300'
    ];
    return delays[Math.min(index, delays.length - 1)];
  }
}
