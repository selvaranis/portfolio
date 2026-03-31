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

interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  details: string;
}

@Component({
  selector: "app-education",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.css"],
  animations: [
    trigger("listAnimation", [
      transition("* <=> *", [
        query(
          ":enter",
          [
            style({ opacity: 0, transform: "translateX(-30px)" }),
            stagger("150ms", [
              animate(
                "500ms cubic-bezier(0.4, 0, 0.2, 1)",
                style({ opacity: 1, transform: "translateX(0)" }),
              ),
            ]),
          ],
          { optional: true },
        ),
      ]),
    ]),
  ],
})
export class EducationComponent {
  educationList: EducationItem[] = [
    {
      institution: "Oxford Engineering College",
      degree: "Bachelor of Technology",
      field: "Information Technology (IT)",
      duration: "2006 - 2010",
      details:
        "Affiliated by Anna University, Chennai. Comprehensive education in software development, computer programming, and IT fundamentals.",
    },
  ];
}
