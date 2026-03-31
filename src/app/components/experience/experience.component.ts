import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import {
  trigger,
  transition,
  style,
  animate,
  stagger,
  query,
} from "@angular/animations";

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string[];
}

@Component({
  selector: "app-experience",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.css"],
  animations: [
    trigger("listAnimation", [
      transition("* <=> *", [
        query(
          ":enter",
          [
            style({ opacity: 0, transform: "translateY(20px)" }),
            stagger("100ms", [
              animate(
                "400ms ease-out",
                style({ opacity: 1, transform: "translateY(0)" }),
              ),
            ]),
          ],
          { optional: true },
        ),
      ]),
    ]),
  ],
})
export class ExperienceComponent {
  constructor(private sanitizer: DomSanitizer) {}
  experiences: ExperienceItem[] = [
    {
      company: "Saksoft Limited",
      position: "Lead Technologist",
      duration: "Mar'2022 - Jan'2026",
      description: [
        "Designed and developed <strong>scalable, high-performance Single Page Applications (SPA)</strong> using <strong>Angular v8/v11/v14+, TypeScript, HTML5, CSS3</strong> and <strong>Bootstrap</strong>.",
        "Led front-end architecture decisions, ensuring modular, reusable, and maintainable code using best practices and design patterns.",
        "Built dynamic, <strong>responsive UI components</strong> with Angular frameworks, improving user experience across web and mobile platforms.",
        "Integrated <strong>RESTful APIs</strong> and third-party services, ensuring seamless communication between front-end and backend systems",
        "<strong>Optimized application performance</strong> through <strong>lazy loading, code splitting, and change detection strategies</strong>.",
        "Ensured <strong>cross-browser compatibility, accessibility (WCAG)</strong>, and responsive design principles.",
        "Mentored junior developers, conducted technical sessions, and contributed to knowledge sharing within the team",
      ],
    },
    {
      company: "Infosys Limited",
      position: "Technology Lead",
      duration: "Jul'2018 - Mar'2022",
      description: [
        "Re-architected and modernized legacy UI screens into scalable, responsive interfaces using <strong>Angular, HTML5, CSS3, and Bootstrap</strong>, aligning with web standards and best practices",
        "Designed and implemented <strong>reusable, modular UI components</strong> and custom grid systems <strong>(transitioning from 12-column to optimized 8-column layouts)</strong> to enhance layout flexibility and consistency across applications.",
        "Led UI defect analysis, troubleshooting, and resolution by collaborating closely with QA teams, ensuring high-quality releases and improved user experience.",
        "Actively participated in <strong>code reviews</strong>, ensuring adherence to performance, accessibility, and cross-browser compatibility standards.",
      ],
    },
    {
      company: "Tech Mahindra Private Limited",
      position: "Senior Software Engineer",
      duration: "Sep'2016 - Jul'2018",
      description: [
        "Developed <strong>responsive and dynamic user interface screens</strong> from scratch using <strong>Angular 4, TypeScript, HTML5, CSS3</strong> and <strong>Bootstrap</strong>, ensuring scalable and maintainable architecture.",
        "Built <strong>responsive web design (RWD) pages</strong> to ensure optimal user experience across desktop, tablet, and mobile devices.",
        "Managed source code and version control using <strong>SVN</strong>, ensuring proper code maintenance and team collaboration.",
        "Handled <strong>UI-related adhoc requests and enhancements</strong>, delivering quick solutions aligned with business requirements.",
      ],
    },
    {
      company: "Cognizant Technology Solutions India Private Limited",
      position: "Programmer Analyst",
      duration: "Aug'2014 - Sep'2016",
      description: [
        "Developed and implemented user interface screens to <strong>promote credit card offers</strong> using <strong>HTML5, CSS3, and modern UI practices</strong>, ensuring visually appealing and user-friendly designs.",
        "Built and maintained <strong>reusable styling components</strong>, enhancing consistency and reducing UI development effort.",
        "Analysed post-production performance of card member offers by preparing detailed reports on acceptance and rejection metrics, enabling data-driven business decisions.",
        "Collaborated with <strong>cross-functional teams</strong> to monitor campaign performance and identify UI improvement opportunities.",
      ],
    },
    {
      company: "Scope e-Knowledge Center Private Limited",
      position: "Web Developer",
      duration: "Jul'2013 - Jul'2014",
      description: [
        "Developed and maintained websites and promotional pages using <strong>HTML5, CSS3, and jQuery</strong>, supporting end-to-end web strategies for industrial clients.",
        "Contributed to <strong>building digital solutions</strong> that enabled manufacturers and distributors to enhance online presence and drive sales growth.",
        "Delivered scalable web solutions and promotional platforms, contributing to improved customer engagement and business conversions.",
      ],
    },
    {
      company: "Sportsinsight Technologies",
      position: "Software Programmer",
      duration: "Apr'2012 - Jun'2013",
      description: [
        "Developed and implemented dynamic website pages using WordPress, ensuring <strong>responsive design</strong> and seamless user experience.",
        "Customized <strong>WordPress themes</strong> and layouts to meet business requirements and branding guidelines.",
        "Managed content updates, page creation, and configuration using <strong>WordPress CMS</strong>.",
        "Ensured <strong>cross-browser compatibility, performance optimization</strong>, and adherence to web standards.",
      ],
    },
  ];

  getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
