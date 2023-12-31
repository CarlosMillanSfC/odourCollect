import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-notification',
  template: `
    <svg
      width="19"
      height="22"
      viewBox="0 0 19 22"
      fill="none"
      [ngClass]="iconClass"
    >
      <mask
        id="mask0_2439_9623"
        style="mask-type:luminance"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="19"
        height="18"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 0H18.4969V17.348H0V0Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_2439_9623)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.24701 1.5C5.75201 1.5 3.31601 4.238 3.31601 6.695C3.31601 8.774 2.73901 9.735 2.22901 10.583C1.82001 11.264 1.49701 11.802 1.49701 12.971C1.66401 14.857 2.90901 15.848 9.24701 15.848C15.55 15.848 16.834 14.813 17 12.906C16.997 11.802 16.674 11.264 16.265 10.583C15.755 9.735 15.178 8.774 15.178 6.695C15.178 4.238 12.742 1.5 9.24701 1.5ZM9.24701 17.348C4.57101 17.348 0.345013 17.018 1.33547e-05 13.035C-0.00298665 11.387 0.500013 10.549 0.944013 9.811C1.39301 9.063 1.81601 8.358 1.81601 6.695C1.81601 3.462 4.80201 0 9.24701 0C13.692 0 16.678 3.462 16.678 6.695C16.678 8.358 17.101 9.063 17.55 9.811C17.994 10.549 18.497 11.387 18.497 12.971C18.148 17.018 13.923 17.348 9.24701 17.348Z"
          fill="#D7B1F2"
        />
      </g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.199 21.5001H9.197C8.076 21.4991 7.015 21.0051 6.21 20.1081C5.933 19.8011 5.958 19.3261 6.266 19.0501C6.574 18.7721 7.048 18.7971 7.325 19.1061C7.843 19.6831 8.508 20.0001 9.198 20.0001H9.199C9.892 20.0001 10.56 19.6831 11.079 19.1051C11.357 18.7981 11.831 18.7731 12.138 19.0501C12.446 19.3271 12.471 19.8021 12.194 20.1091C11.386 21.0061 10.323 21.5001 9.199 21.5001Z"
        fill="#D7B1F2"
      />
    </svg>
  `,
  styleUrls: [],
})
export class NotificationComponent {
  @Input() iconClass = '';
}
