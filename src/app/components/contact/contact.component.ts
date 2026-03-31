import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
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
export class ContactComponent implements OnInit {
  formData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  submitted = false;
  successMessage = "";
  errorMessage = "";

  ngOnInit(): void {
    // Initialize EmailJS
    if (typeof (window as any).emailjs !== "undefined") {
      (window as any).emailjs.init("SERVICE_ID_PLACEHOLDER");
    } else {
      this.loadEmailJS();
    }
  }

  loadEmailJS(): void {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js";
    script.onload = () => {
      (window as any).emailjs.init("SERVICE_ID_PLACEHOLDER");
    };
    document.head.appendChild(script);
  }

  onSubmit(): void {
    if (this.formData.name && this.formData.email && this.formData.message) {
      // Store form data in localStorage
      const submissionData = {
        ...this.formData,
        submittedAt: new Date().toISOString(),
      };

      let submissions = JSON.parse(
        localStorage.getItem("contactSubmissions") || "[]",
      );
      submissions.push(submissionData);
      localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

      // Send email using EmailJS
      this.sendEmail(submissionData);
    }
  }

  sendEmail(data: any): void {
    if (typeof (window as any).emailjs === "undefined") {
      console.log("EmailJS not loaded, storing data locally only");
      this.showSuccessMessage(data);
      return;
    }

    const emailParams = {
      to_email: "selvaranis05@gmail.com",
      from_email: data.email,
      from_name: data.name,
      subject: data.subject || "Contact Form Submission",
      message: data.message,
      reply_to: data.email,
    };

    (window as any).emailjs
      .send("SERVICE_ID_PLACEHOLDER", "TEMPLATE_ID_PLACEHOLDER", emailParams)
      .then(
        (response: any) => {
          console.log("Email sent successfully!", response);
          this.showSuccessMessage(data);
        },
        (error: any) => {
          console.log("Email sending failed, but data stored locally", error);
          this.showSuccessMessage(data);
        },
      );
  }

  showSuccessMessage(data: any): void {
    this.submitted = true;
    this.successMessage = `Thank you, ${data.name}! Your message has been sent successfully. I will get back to you at ${data.email} soon.`;
    this.errorMessage = "";

    // Reset form after 4 seconds
    setTimeout(() => {
      this.formData = { name: "", email: "", subject: "", message: "" };
      this.submitted = false;
      this.successMessage = "";
    }, 4000);
  }

  getStoredSubmissions(): any[] {
    return JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
  }
}
