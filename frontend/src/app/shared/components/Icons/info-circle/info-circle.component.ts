import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon-info-circle',
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" [ngClass]="iconClass" height="20" viewBox="0 0 20 20" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.5C5.313 1.5 1.5 5.313 1.5 10C1.5 14.687 5.313 18.5 10 18.5C14.687 18.5 18.5 14.687 18.5 10C18.5 5.313 14.687 1.5 10 1.5ZM10 20C4.486 20 0 15.514 0 10C0 4.486 4.486 0 10 0C15.514 0 20 4.486 20 10C20 15.514 15.514 20 10 20Z" fill="black"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99414 11.373C9.58014 11.373 9.24414 11.037 9.24414 10.623V6.204C9.24414 5.79 9.58014 5.454 9.99414 5.454C10.4081 5.454 10.7441 5.79 10.7441 6.204V10.623C10.7441 11.037 10.4081 11.373 9.99414 11.373Z" fill="black"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0039 14.7959C9.4509 14.7959 8.9989 14.3489 8.9989 13.7959C8.9989 13.2429 9.4419 12.7959 9.9939 12.7959H10.0039C10.5569 12.7959 11.0039 13.2429 11.0039 13.7959C11.0039 14.3489 10.5569 14.7959 10.0039 14.7959Z" fill="black"/>
    </svg>
  `,
  styleUrls: [],
})
export class InfoCircleComponent {
  @Input() iconClass =''
}
