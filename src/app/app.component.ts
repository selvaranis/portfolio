import { Component, ElementRef, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { AboutComponent } from "./components/about/about.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { EducationComponent } from "./components/education/education.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("menuItemAnimation", [
      state(
        "inactive",
        style({
          opacity: 1,
          transform: "translateX(-5px)",
        }),
      ),
      state(
        "active",
        style({
          opacity: 1,
          transform: "translateX(0)",
        }),
      ),
      transition("inactive <=> active", animate("300ms ease-in-out")),
    ]),
    trigger("contentAnimation", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(20px)" }),
        animate(
          "500ms ease-out",
          style({ opacity: 1, transform: "translateY(0)" }),
        ),
      ]),
      transition(":leave", [
        animate(
          "300ms ease-in",
          style({ opacity: 0, transform: "translateY(20px)" }),
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  @ViewChild("header") elementView: ElementRef | undefined;
  headerHeight: number = 0;
  title = "Personal Blog";
  activeMenu: string = "about";
  isMobileMenuOpen = false;

  menuItems = [
    { name: "about", label: "About Me", icon: "👤" },
    { name: "skills", label: "Skills", icon: "⚡" },
    { name: "experience", label: "Experience", icon: "💼" },
    { name: "education", label: "Education", icon: "🎓" },
    // { name: "contact", label: "Let's Connect", icon: "✉️" },
  ];

  contactData = {
    email: "selvaranis05@gmail.com",
    phone: "(+91) 98432 79698",
  };

  selectMenu(menuName: string): void {
    this.activeMenu = menuName;
    this.isMobileMenuOpen = false;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  getMenuState(menuName: string): string {
    return this.activeMenu === menuName ? "active" : "inactive";
  }
  ngAfterViewInit(): void {
    if (this.elementView) {
      this.headerHeight = this.elementView.nativeElement.offsetHeight + 1;
      console.log("Header height:", this.headerHeight);
    }
  }
}
