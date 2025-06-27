import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { AboutComponent } from "./about/about.component";
import { ProjectsComponent } from "./projects/projects.component";
import { FooterComponent } from "../layout/components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent, ProjectsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
