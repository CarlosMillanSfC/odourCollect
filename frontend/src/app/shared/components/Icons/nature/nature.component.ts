import { Component } from '@angular/core';

@Component({
  selector: 'icon-nature',
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
      <g clip-path="url(#clip0_1196_11000)">
        <path d="M52.5 42.875H48.0008C47.6096 41.3691 46.2516 40.25 44.625 40.25V34.1022C45.3582 34.6579 46.2612 35 47.25 35C49.6624 35 51.625 33.0374 51.625 30.625C51.625 30.3511 51.597 30.0755 51.541 29.7999C52.6881 28.987 53.375 27.6833 53.375 26.25C53.375 25.0154 52.864 23.8726 51.9732 23.0545C52.3162 22.421 52.5 21.7149 52.5 21C52.5 19.9141 52.0923 18.8807 51.3643 18.081C51.5375 17.6076 51.625 17.1203 51.625 16.625C51.625 14.385 49.9336 12.5335 47.761 12.2798C47.0829 10.6881 45.5166 9.625 43.75 9.625C41.9834 9.625 40.4171 10.6881 39.739 12.2798C37.5664 12.5335 35.875 14.385 35.875 16.625C35.875 17.1203 35.9625 17.6076 36.1357 18.081C35.6772 18.5841 35.364 19.1852 35.1811 19.8284C34.1101 18.9131 32.851 18.375 31.5 18.375C29.834 18.375 28.3045 19.1817 27.1014 20.5231C26.9894 19.3506 26.4679 18.2306 25.6314 17.3941L23.1122 14.875H27.125V13.1128C27.125 12.292 26.7164 11.5089 26.0321 11.0189C22.8672 8.75088 20.314 5.69275 18.6506 2.1735C18.2718 1.372 17.4947 0.875 16.625 0.875C15.7552 0.875 14.9782 1.372 14.5994 2.1735C12.9369 5.69275 10.3836 8.75175 7.217 11.0189C6.53363 11.5089 6.125 12.292 6.125 13.1128V14.875H10.1378L7.61862 17.3941C6.66925 18.3435 6.125 19.6577 6.125 21V21.875H10.1378L7.61862 24.3941C6.66925 25.3435 6.125 26.6577 6.125 28V28.875H15.75V32.375C13.51 32.375 11.6585 34.0664 11.4048 36.239C9.81313 36.9171 8.75 38.4834 8.75 40.25C8.75 41.2169 9.07288 42.1461 9.62237 42.875C8.176 42.8768 7 44.0536 7 45.5C7 45.983 6.608 46.375 6.125 46.375H3.5C2.05275 46.375 0.875 47.5527 0.875 49C0.875 50.4473 2.05275 51.625 3.5 51.625H8.036C7.938 51.8997 7.875 52.192 7.875 52.5C7.875 53.9473 9.05275 55.125 10.5 55.125H44.625C46.0723 55.125 47.25 53.9473 47.25 52.5C47.25 51.0527 46.0723 49.875 44.625 49.875H42.875H42C41.517 49.875 41.125 49.483 41.125 49C41.125 48.517 41.517 48.125 42 48.125H52.5C53.9473 48.125 55.125 46.9473 55.125 45.5C55.125 44.0527 53.9473 42.875 52.5 42.875ZM46.1213 42.875H34.3831C34.5896 42.5285 34.902 42.2467 35.3036 42.1068L35.9109 41.895L35.8899 41.2519C35.8881 41.1959 35.882 41.1416 35.875 41.125C35.875 39.6777 37.0527 38.5 38.5 38.5C39.4345 38.5 40.306 39.0163 40.775 39.8466L40.9824 40.215L41.4006 40.2806C42.0744 40.3874 42.6256 40.8835 42.805 41.5459L43.0623 42.4961L43.9757 42.1286C44.8175 41.7926 45.7004 42.1829 46.1213 42.875ZM32.375 37.5419C34.3262 37.205 36.0264 35.7612 37.1385 33.6805C37.9479 34.4995 39.0617 35 40.25 35C41.2388 35 42.1418 34.6579 42.875 34.1022V38.9953C42.6265 38.85 42.3657 38.724 42.084 38.6435C41.2703 37.4658 39.9315 36.75 38.5 36.75C36.2241 36.75 34.349 38.4965 34.1434 40.719C33.3209 41.188 32.7268 41.9694 32.4896 42.875H32.375V37.5419ZM37.7379 18.9691L38.3057 18.5106L37.9566 17.8701C37.737 17.465 37.625 17.0459 37.625 16.625C37.625 15.1777 38.8027 14 40.1931 13.9974L41.0427 14.0411L41.2178 13.3534C41.5144 12.1887 42.5565 11.375 43.75 11.375C44.9435 11.375 45.9856 12.1887 46.2831 13.3534L46.4581 14.0411L47.1686 14.0114C47.215 14.0096 47.2614 14.0044 47.25 14C48.6973 14 49.875 15.1777 49.875 16.625C49.875 17.0459 49.763 17.465 49.5434 17.8693L49.1943 18.5098L49.7621 18.9683C50.3904 19.4757 50.75 20.216 50.75 21C50.75 21.777 50.4044 22.3457 50.1147 22.687L49.4454 23.4754L50.3344 24.0039C51.142 24.4869 51.625 25.326 51.625 26.25C51.625 27.2571 51.0545 28.1601 50.134 28.6037L49.4139 28.952L49.6965 29.7001C49.8155 30.0151 49.875 30.3258 49.875 30.625C49.875 32.0723 48.6973 33.25 47.25 33.25C45.8027 33.25 44.625 32.0723 44.625 30.625V28.308L47.9334 24.1719L46.5658 23.0781L44.625 25.5045V16.625H42.875V22.0045L40.9334 19.5781L39.5658 20.6719L42.875 24.808V30.625C42.875 32.0723 41.6973 33.25 40.25 33.25C39.2674 33.25 38.367 32.6839 37.9207 31.8229C38.2918 30.6495 38.5 29.358 38.5 28C38.5 25.5684 37.8359 23.3511 36.75 21.6554V21C36.75 20.216 37.1096 19.4757 37.7379 18.9691ZM31.5 20.125C34.3954 20.125 36.75 23.6574 36.75 28C36.75 31.8946 34.8539 35.1286 32.375 35.7569V29.183L35.6834 25.0469L34.3158 23.9531L32.375 26.3795V23.625H30.625V30.3599L28.728 27.5144L27.272 28.4848L30.625 33.5151V35.7569C28.1461 35.1295 26.25 31.8946 26.25 28C26.25 23.6574 28.6046 20.125 31.5 20.125ZM26.1047 21.875C25.7302 22.4971 25.4187 23.1901 25.1667 23.9286L23.1122 21.875H26.1047ZM8.85588 25.6314L12.6122 21.875H14V20.125H7.99312C8.14625 19.5641 8.44288 19.0452 8.85588 18.6314L12.6122 14.875H14V13.125H7.875V13.1128C7.875 12.8511 8.00625 12.6061 8.23637 12.4408C11.6445 10.0013 14.3911 6.70862 16.1814 2.92162C16.3538 2.55412 16.8954 2.55412 17.0686 2.92162C18.8589 6.70862 21.6064 10.0013 25.0128 12.4408C25.2437 12.6061 25.375 12.852 25.375 13.1128L19.25 13.125V14.875H20.6378L24.3941 18.6314C24.808 19.0452 25.1046 19.5641 25.2569 20.125H19.25V21.875H20.6378L24.3941 25.6314C24.4921 25.7294 24.5814 25.8326 24.6654 25.9403C24.6041 26.327 24.5586 26.7216 24.5324 27.125H7.99312C8.14625 26.5641 8.442 26.0452 8.85588 25.6314ZM17.5 28.875H24.5324C24.829 33.3742 27.3857 36.9827 30.625 37.5419V42.875H27.111C27.6771 42.1225 28 41.2064 28 40.25C28 37.8376 26.0374 35.875 23.625 35.875C23.3511 35.875 23.0746 35.903 22.7999 35.959C21.987 34.8119 20.6841 34.125 19.25 34.125C19.2439 34.125 19.2369 34.125 19.2316 34.125C18.7775 33.5204 18.1764 33.0549 17.5 32.7547V28.875ZM12.4784 37.7169L13.1661 37.5419L13.1364 36.8314C13.1346 36.7894 13.1302 36.7474 13.1259 36.7474C13.1259 36.7474 13.125 36.7482 13.125 36.7491C13.125 35.3019 14.3027 34.1241 15.75 34.1241C16.6871 34.1241 17.5586 34.6413 18.0267 35.4734L18.3951 35.9844L18.9875 35.9012C19.0732 35.8907 19.1599 35.875 19.25 35.875C20.258 35.875 21.1601 36.4455 21.6038 37.3651L21.952 38.0879L22.7019 37.8026C24.5026 37.1201 26.2509 38.5009 26.25 40.25C26.25 41.0025 25.9263 41.7209 25.3601 42.2188L24.8535 42.875H12.0024L11.389 42.2188C10.8237 41.7209 10.5 41.0025 10.5 40.25C10.5 39.0565 11.3137 38.0144 12.4784 37.7169ZM52.5 46.375H42C40.5527 46.375 39.375 47.5527 39.375 49C39.375 49.308 39.438 49.6003 39.536 49.875H37.625V51.625H42H42.875H44.625C45.108 51.625 45.5 52.017 45.5 52.5C45.5 52.983 45.108 53.375 44.625 53.375H10.5C10.017 53.375 9.625 52.983 9.625 52.5C9.625 52.017 10.017 51.625 10.5 51.625H13.125H15.75V49.875H13.125H10.5H3.5C3.017 49.875 2.625 49.483 2.625 49C2.625 48.517 3.017 48.125 3.5 48.125H6.125C7.57225 48.125 8.75 46.9473 8.75 45.5C8.75 45.017 9.142 44.625 9.625 44.625H52.5C52.983 44.625 53.375 45.017 53.375 45.5C53.375 45.983 52.983 46.375 52.5 46.375Z" fill="black"/>
        <path d="M21 48.5625C21 47.3559 20.0191 46.375 18.8125 46.375H15.75V48.125H18.8125C19.0531 48.125 19.25 48.3219 19.25 48.5625C19.25 49.7691 20.2309 50.75 21.4375 50.75H24.5V49H21.4375C21.1969 49 21 48.8031 21 48.5625Z" fill="black"/>
      </g>
      <defs>
        <clipPath id="clip0_1196_11000">
          <rect width="56" height="56" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  `,
  styleUrls: [],
})
export class NatureComponent { }
