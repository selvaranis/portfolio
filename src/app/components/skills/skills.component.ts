import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  trigger,
  transition,
  style,
  animate,
  stagger,
  query,
} from "@angular/animations";

interface Skill {
  name: string;
  level: number;
  category: string;
}

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"],
  animations: [
    trigger("skillAnimation", [
      transition("* <=> *", [
        query(
          ":enter",
          [
            style({ opacity: 0, transform: "scale(0.8) translateY(20px)" }),
            stagger("80ms", [
              animate(
                "400ms cubic-bezier(0.4, 0, 0.2, 1)",
                style({ opacity: 1, transform: "scale(1) translateY(0)" }),
              ),
            ]),
          ],
          { optional: true },
        ),
      ]),
    ]),
  ],
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: "Angular v14+", level: 95, category: "Frontend" },
    { name: "HTML5", level: 100, category: "Frontend" },
    { name: "CSS", level: 100, category: "Frontend" },
    { name: "Bootstrap", level: 100, category: "Frontend" },
    { name: "Angular Material", level: 80, category: "Frontend" },
    { name: "Javascript (ES6+)", level: 85, category: "Language" },
    { name: "Typescript", level: 85, category: "Language" },
    { name: "Git", level: 90, category: "Tools" },
    { name: "Ngx-bootstrap", level: 90, category: "Frontend" },
    { name: "Responsive Web Design", level: 95, category: "Frontend" },
    { name: "React", level: 60, category: "Frontend" },
    { name: "Node.js", level: 60, category: "Backend" },
    { name: "Rest API Integration", level: 80, category: "Backend" },
    { name: "MongoDB", level: 60, category: "Database" },
    { name: "Java", level: 50, category: "Language" },
  ];

  categories = Array.from(new Set(this.skills.map((s) => s.category)));

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter((s) => s.category === category);
  }
}
