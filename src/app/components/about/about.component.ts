import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
  animations: [
    trigger("slideInAnimation", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(20px)" }),
        animate(
          "500ms ease-out",
          style({ opacity: 1, transform: "translateY(0)" }),
        ),
      ]),
    ]),
  ],
})
export class AboutComponent {
  aboutContent = {
    introduction:
      "I am a passionate Senior Frontend Developer with over 14 years of experience delivering intuitive, high-quality web applications. I excel at transforming complex requirements into seamless user experiences, combining strong technical expertise with a keen eye for design, performance, and usability.",
    experience:
      "With over 14 years in frontend development, including 10+ years of hands-on Angular experience, I have played a key role in architecting and delivering applications across startups and enterprise environments, driving best practices, performance optimization, and maintainable code standards.",
    expertise: [
      "Angular & TypeScript",
      "React & Vue.js(Beginner)",
      "HTML5 & CSS3",
      "Responsive Design",
      "Web Performance Optimization",
      "UI/UX Implementation",
      "Cross-Browser Compatibility",
      "Agile & Scrum Methodologies",
      "Version Control (Git)",
      "Bootstrap & Material Design",
    ],
    interests: [
      "Building scalable web applications",
      "Mentoring junior developers",
      "Open-source contributions",
      "Exploring new technologies",
    ],
    highlights: [
      "Led development of 10+ successful projects",
      "Improved application performance by 40%",
      "Mentored 10+ junior developers",
    ],
  };
}
