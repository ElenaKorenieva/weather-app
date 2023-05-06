import PropTypes from "prop-types";

const IconSelector = ({ icon }) => {
  if (icon === "Rain" || icon === "Drizzle") {
    icon = "Raining";
  }
  switch (icon) {
    case "Clear":
      return (
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_101_10)">
            <path
              d="M17.5 27.002C12.2606 27.002 7.99805 22.7394 7.99805 17.5C7.99805 12.2606 12.2606 7.99805 17.5 7.99805C22.7394 7.99805 27.002 12.2606 27.002 17.5C27.002 22.7394 22.7394 27.002 17.5 27.002Z"
              fill="#FDBF00"
            />
            <path
              d="M17.5 5.58106C16.9337 5.58106 16.4746 5.12196 16.4746 4.55567V1.02539C16.4746 0.459102 16.9337 0 17.5 0C18.0663 0 18.5254 0.459102 18.5254 1.02539V4.55567C18.5254 5.12196 18.0663 5.58106 17.5 5.58106Z"
              fill="#FDBF00"
            />
            <path
              d="M33.9746 18.5254H30.4443C29.878 18.5254 29.4189 18.0663 29.4189 17.5C29.4189 16.9337 29.878 16.4746 30.4443 16.4746H33.9746C34.5409 16.4746 35 16.9337 35 17.5C35 18.0663 34.5409 18.5254 33.9746 18.5254Z"
              fill="#FF8856"
            />
            <path
              d="M17.5 35.0001C16.9337 35.0001 16.4746 34.541 16.4746 33.9747V30.4444C16.4746 29.8781 16.9337 29.419 17.5 29.419C18.0663 29.419 18.5254 29.8781 18.5254 30.4444V33.9747C18.5254 34.541 18.0663 35.0001 17.5 35.0001Z"
              fill="#FDBF00"
            />
            <path
              d="M4.55567 18.5254H1.02539C0.459102 18.5254 0 18.0663 0 17.5C0 16.9337 0.459102 16.4746 1.02539 16.4746H4.55567C5.12196 16.4746 5.58106 16.9337 5.58106 17.5C5.58106 18.0663 5.12196 18.5254 4.55567 18.5254Z"
              fill="#FDBF00"
            />
            <path
              d="M26.6531 9.37241C26.3907 9.37241 26.1282 9.27233 25.9281 9.07204C25.5276 8.67166 25.5276 8.02238 25.9281 7.62193L28.4244 5.12565C28.8248 4.72521 29.474 4.72521 29.8745 5.12565C30.2749 5.52604 30.2749 6.17531 29.8745 6.57576L27.3782 9.07204C27.178 9.27233 26.9155 9.37241 26.6531 9.37241Z"
              fill="#FF8856"
            />
            <path
              d="M29.1493 30.1746C28.8869 30.1746 28.6245 30.0745 28.4243 29.8743L25.928 27.378C25.5275 26.9777 25.5275 26.3284 25.928 25.9279C26.3283 25.5276 26.9776 25.5275 27.3781 25.9279L29.8744 28.4242C30.2748 28.8246 30.2748 29.4739 29.8744 29.8743C29.6742 30.0745 29.4117 30.1746 29.1493 30.1746Z"
              fill="#FF8856"
            />
            <path
              d="M5.85067 30.1747C5.58824 30.1747 5.32581 30.0746 5.12565 29.8744C4.72521 29.474 4.72521 28.8247 5.12565 28.4242L7.62193 25.928C8.02231 25.5275 8.67159 25.5275 9.07204 25.928C9.47249 26.3283 9.47249 26.9776 9.07204 27.3781L6.57576 29.8744C6.37554 30.0746 6.1131 30.1747 5.85067 30.1747Z"
              fill="#FDBF00"
            />
            <path
              d="M8.34689 9.37241C8.08446 9.37241 7.82203 9.27233 7.62188 9.07204L5.12553 6.57576C4.72508 6.17538 4.72508 5.5261 5.12553 5.12565C5.52591 4.72521 6.17519 4.72521 6.57564 5.12565L9.07198 7.62193C9.47243 8.02231 9.47243 8.67159 9.07198 9.07204C8.87176 9.27233 8.60932 9.37241 8.34689 9.37241Z"
              fill="#FDBF00"
            />
            <path
              d="M22.4672 6.57266C22.336 6.57266 22.2028 6.54737 22.0741 6.49391C21.5512 6.2766 21.3034 5.67647 21.5207 5.15352L22.8754 1.8936C23.0929 1.37058 23.693 1.12298 24.2158 1.34023C24.7387 1.55755 24.9865 2.15767 24.7692 2.68062L23.4145 5.94054C23.2506 6.33477 22.8691 6.57266 22.4672 6.57266Z"
              fill="#FF8856"
            />
            <path
              d="M32.7128 24.8481C32.5816 24.8481 32.4484 24.8228 32.3196 24.7693L29.0597 23.4146C28.5368 23.1973 28.2891 22.5971 28.5063 22.0742C28.7237 21.5512 29.3237 21.3035 29.8467 21.5208L33.1067 22.8756C33.6296 23.0929 33.8773 23.693 33.6601 24.2159C33.4962 24.6102 33.1147 24.8481 32.7128 24.8481Z"
              fill="#FF8856"
            />
            <path
              d="M11.1773 33.7388C11.0461 33.7388 10.9129 33.7135 10.7841 33.66C10.2613 33.4427 10.0135 32.8426 10.2308 32.3197L11.5855 29.0597C11.8029 28.5367 12.4029 28.2891 12.9259 28.5064C13.4488 28.7237 13.6965 29.3238 13.4793 29.8468L12.1245 33.1067C11.9607 33.5009 11.5792 33.7388 11.1773 33.7388Z"
              fill="#FDBF00"
            />
            <path
              d="M5.5464 13.5581C5.41522 13.5581 5.28199 13.5328 5.15327 13.4794L1.89334 12.1246C1.37039 11.9073 1.12266 11.3072 1.33991 10.7842C1.55729 10.2613 2.15735 10.0137 2.6803 10.2309L5.94022 11.5856C6.4631 11.8029 6.71083 12.4031 6.49359 12.926C6.3298 13.3203 5.94828 13.5581 5.5464 13.5581Z"
              fill="#FDBF00"
            />
            <path
              d="M29.4652 13.5859C29.0624 13.5859 28.6803 13.3469 28.517 12.9515C28.3009 12.428 28.5501 11.8285 29.0736 11.6124L32.3366 10.2652C32.8599 10.0492 33.4596 10.2983 33.6757 10.8217C33.8918 11.3452 33.6427 11.9448 33.1192 12.1608L29.8561 13.508C29.7281 13.5608 29.5956 13.5859 29.4652 13.5859Z"
              fill="#FF8856"
            />
            <path
              d="M23.7872 33.7537C23.3843 33.7537 23.0023 33.5148 22.839 33.1193L21.4918 29.8562C21.2757 29.3327 21.5248 28.7332 22.0484 28.5171C22.5717 28.301 23.1714 28.5501 23.3875 29.0736L24.7346 32.3367C24.9507 32.8601 24.7016 33.4597 24.178 33.6758C24.05 33.7287 23.9175 33.7537 23.7872 33.7537Z"
              fill="#FF8856"
            />
            <path
              d="M2.2724 24.8122C1.86949 24.8122 1.4875 24.5733 1.32419 24.1779C1.1081 23.6544 1.35727 23.0548 1.88077 22.8388L5.1439 21.4916C5.66754 21.2754 6.26691 21.5247 6.483 22.0481C6.69908 22.5715 6.44991 23.1711 5.92641 23.3871L2.66328 24.7344C2.53531 24.7872 2.40269 24.8122 2.2724 24.8122Z"
              fill="#FDBF00"
            />
            <path
              d="M12.5608 6.56098C12.158 6.56098 11.7759 6.32207 11.6126 5.92661L10.2655 2.66347C10.0494 2.14004 10.2985 1.54046 10.8221 1.32438C11.3454 1.1083 11.945 1.3574 12.1612 1.88089L13.5083 5.14403C13.7244 5.66753 13.4753 6.26704 12.9517 6.48312C12.8238 6.53589 12.6912 6.56098 12.5608 6.56098Z"
              fill="#FDBF00"
            />
            <path
              d="M17.5 0V5.58106C18.0663 5.58106 18.5254 5.12196 18.5254 4.55567V1.02539C18.5254 0.459102 18.0663 0 17.5 0Z"
              fill="#FF8856"
            />
            <path
              d="M17.5 7.99805V27.002C22.7394 27.002 27.002 22.7394 27.002 17.5C27.002 12.2606 22.7394 7.99805 17.5 7.99805Z"
              fill="#FF8856"
            />
            <path
              d="M17.5 29.419V35.0001C18.0663 35.0001 18.5254 34.541 18.5254 33.9747V30.4444C18.5254 29.8781 18.0663 29.419 17.5 29.419Z"
              fill="#FF8856"
            />
          </g>
          <defs>
            <clipPath id="clip0_101_10">
              <rect width="35" height="35" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "Clouds":
      return (
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_101_173)">
            <path
              d="M29.4091 22.9252C25.7807 22.9252 17.3616 20.275 13.628 16.9702C12.251 15.7514 11.5527 14.4961 11.5527 13.2393C11.5527 10.45 13.822 8.1807 16.6113 8.1807C17.0894 8.1807 17.5612 8.24776 18.0141 8.37833C18.6991 6.38654 20.5868 4.97205 22.7979 4.97205C24.6251 4.97205 26.2966 5.96572 27.1872 7.51536C27.33 7.50326 27.4735 7.49717 27.6172 7.49717C30.4065 7.49717 32.6758 9.76643 32.6758 12.5558C32.6758 12.8838 32.6447 13.2076 32.5829 13.525C34.0587 14.4335 35 16.0673 35 17.8386C35 19.1677 34.4651 20.4084 33.4938 21.3321C32.608 22.1744 31.3907 22.7276 30.0659 22.8896C29.87 22.9135 29.65 22.9252 29.4091 22.9252Z"
              fill="#EEE1DC"
            />
            <path
              d="M32.5829 13.525C32.6447 13.2075 32.6758 12.8838 32.6758 12.5557C32.6758 9.76638 30.4065 7.49712 27.6172 7.49712C27.4734 7.49712 27.33 7.50321 27.1872 7.51531C26.375 6.10211 24.9133 5.15171 23.2764 4.99524V21.7547C25.6866 22.4909 27.9403 22.9252 29.4091 22.9252C29.65 22.9252 29.87 22.9135 30.0659 22.8896C31.3907 22.7276 32.608 22.1745 33.4938 21.3321C34.4651 20.4084 35 19.1677 35 17.8386C35 16.0673 34.0587 14.4335 32.5829 13.525Z"
              fill="#E0D2CD"
            />
            <path
              d="M14.5696 30.028C13.4014 30.028 12.2583 29.6247 11.3508 28.8921C10.8815 28.5133 10.4843 28.0546 10.176 27.543C9.51057 27.9491 8.73811 28.1735 7.94288 28.1735C6.0323 28.1735 4.38669 26.9024 3.84583 25.1437C2.96399 25.0524 2.12317 24.6892 1.44758 24.0924C0.527666 23.2798 0 22.1096 0 20.8817C0 18.663 1.69511 16.8328 3.85813 16.6178C4.0803 15.9171 4.48144 15.2809 5.03152 14.7713C5.82572 14.0355 6.85966 13.6303 7.94288 13.6303C8.73065 13.6303 9.49676 13.8509 10.1583 14.2501C10.4657 13.7322 10.8639 13.2674 11.336 12.8834C12.2462 12.1431 13.3946 11.7354 14.5696 11.7354C15.7447 11.7354 16.8931 12.1431 17.8032 12.8834C18.2753 13.2674 18.6735 13.7323 18.9809 14.2501C19.6425 13.8509 20.4086 13.6303 21.1964 13.6303C22.2796 13.6303 23.3136 14.0356 24.1078 14.7713C24.658 15.2811 25.0592 15.9174 25.2813 16.6185C26.167 16.7077 27.0117 17.071 27.6903 17.6698C28.6112 18.4824 29.1393 19.6531 29.1393 20.8817C29.1393 22.1096 28.6117 23.2798 27.6917 24.0924C27.0162 24.6891 26.1753 25.0523 25.2934 25.1436C24.7526 26.9023 23.1069 28.1734 21.1964 28.1734C20.4012 28.1734 19.6286 27.949 18.9633 27.543C18.655 28.0546 18.2578 28.5133 17.7885 28.892C16.8809 29.6246 15.7378 30.028 14.5696 30.028Z"
              fill="#FFF4F4"
            />
            <path
              d="M27.6902 17.6698C27.0116 17.071 26.1669 16.7077 25.2812 16.6185C25.0591 15.9174 24.6579 15.2811 24.1076 14.7713C23.3134 14.0355 22.2795 13.6303 21.1963 13.6303C20.4086 13.6303 19.6424 13.8509 18.9808 14.2501C18.6735 13.7322 18.2753 13.2674 17.8031 12.8834C16.893 12.1431 15.7445 11.7354 14.5695 11.7354V30.028C15.7376 30.028 16.8808 29.6247 17.7883 28.8921C18.2576 28.5133 18.6548 28.0546 18.9631 27.543C19.6285 27.949 20.401 28.1735 21.1962 28.1735C23.1067 28.1735 24.7524 26.9024 25.2933 25.1437C26.175 25.0524 27.0159 24.6891 27.6915 24.0925C28.6115 23.2799 29.1392 22.1096 29.1392 20.8818C29.1392 19.6531 28.6111 18.4824 27.6902 17.6698Z"
              fill="#F6EFEA"
            />
          </g>
          <defs>
            <clipPath id="clip0_101_173">
              <rect width="35" height="35" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "Raining":
      return (
        <svg
          width="396"
          height="327"
          viewBox="0 0 396 327"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_di_1_57)">
            <path
              d="M125.5 215C113.049 231.333 95.6169 264 125.5 264C155.383 264 137.951 231.333 125.5 215Z"
              fill="#00BCFF"
            />
          </g>
          <g filter="url(#filter1_di_1_57)">
            <path
              d="M195.5 239C183.049 255.333 165.617 288 195.5 288C225.383 288 207.951 255.333 195.5 239Z"
              fill="#00BCFF"
            />
          </g>
          <g filter="url(#filter2_di_1_57)">
            <path
              d="M260.5 215C248.049 231.333 230.617 264 260.5 264C290.383 264 272.951 231.333 260.5 215Z"
              fill="#00BCFF"
            />
          </g>
          <g filter="url(#filter3_f_1_57)">
            <rect
              x="78"
              y="182"
              width="240"
              height="35"
              rx="17.5"
              fill="#00BCFF"
            />
          </g>
          <g filter="url(#filter4_b_1_57)">
            <g filter="url(#filter5_i_1_57)">
              <path
                d="M317.747 95.0084C318.549 90.4546 318.967 85.7701 318.967 80.9888C318.967 36.2599 282.369 0 237.223 0C203.661 0 174.823 20.0397 162.234 48.7007C152.035 39.9768 138.801 34.7095 124.339 34.7095C92.0918 34.7095 65.9504 60.8972 65.9504 93.2014C65.9504 95.0003 66.0315 96.7801 66.1902 98.5376C50.6799 106.065 40 121.858 40 140.124C40 165.683 60.9131 186.403 86.7108 186.403H307.289C333.087 186.403 354 165.683 354 140.124C354 118.126 338.51 99.7132 317.747 95.0084Z"
                fill="url(#paint0_linear_1_57)"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_di_1_57"
              x="90"
              y="215"
              width="71"
              height="88"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="20" />
              <feGaussianBlur stdDeviation="9.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.283785 0 0 0 0 0.178889 0 0 0 0 0.933333 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_57"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_57"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="9" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_1_57"
              />
            </filter>
            <filter
              id="filter1_di_1_57"
              x="160"
              y="239"
              width="71"
              height="88"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="20" />
              <feGaussianBlur stdDeviation="9.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.283785 0 0 0 0 0.178889 0 0 0 0 0.933333 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_57"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_57"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="9" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_1_57"
              />
            </filter>
            <filter
              id="filter2_di_1_57"
              x="225"
              y="215"
              width="71"
              height="88"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="20" />
              <feGaussianBlur stdDeviation="9.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.283785 0 0 0 0 0.178889 0 0 0 0 0.933333 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_57"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_57"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="9" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_1_57"
              />
            </filter>
            <filter
              id="filter3_f_1_57"
              x="0"
              y="104"
              width="396"
              height="191"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="39"
                result="effect1_foregroundBlur_1_57"
              />
            </filter>
            <filter
              id="filter4_b_1_57"
              x="13"
              y="-27"
              width="368"
              height="240.403"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="13.5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1_57"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1_57"
                result="shape"
              />
            </filter>
            <filter
              id="filter5_i_1_57"
              x="40"
              y="0"
              width="314"
              height="196.403"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="11" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1_57"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1_57"
              x1="59.9717"
              y1="169.76"
              x2="376.746"
              y2="-67.1272"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0.58" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "Snow":
      return (
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_101_69)">
            <path
              d="M21.3623 31.1036C21.3623 30.5373 20.9032 30.0782 20.3369 30.0782H19.9755L20.2311 29.8226C20.6315 29.4221 20.6315 28.7729 20.2311 28.3725C19.8307 27.972 19.1814 27.972 18.781 28.3725L18.5254 28.6281V28.2325C18.5254 27.6663 18.0663 27.2072 17.5 27.2072C16.9337 27.2072 16.4746 27.6663 16.4746 28.2325V28.6281L16.1949 28.3484C15.7945 27.948 15.1452 27.948 14.7448 28.3484C14.3443 28.7489 14.3443 29.3981 14.7448 29.7985L15.0245 30.0782H14.6631C14.0968 30.0782 13.6377 30.5373 13.6377 31.1036C13.6377 31.6699 14.0968 32.129 14.6631 32.129H15.0245L14.7689 32.3846C14.3685 32.7851 14.3685 33.4343 14.7689 33.8347C14.9691 34.035 15.2316 34.1351 15.4939 34.1351C15.7563 34.1351 16.0188 34.035 16.2189 33.8347L16.4745 33.5791V33.9747C16.4745 34.541 16.9336 35.0001 17.4999 35.0001C18.0662 35.0001 18.5253 34.541 18.5253 33.9747V33.5791L18.805 33.8588C19.0053 34.059 19.2677 34.1592 19.5301 34.1592C19.7924 34.1592 20.0549 34.0591 20.2551 33.8588C20.6555 33.4583 20.6555 32.8091 20.2551 32.4087L19.9755 32.129H20.3369C20.9033 32.129 21.3623 31.6699 21.3623 31.1036Z"
              fill="#7DD5F4"
            />
            <path
              d="M7.72461 24.6094C7.72461 24.0431 7.26551 23.584 6.69922 23.584H6.3378L6.5934 23.3284C6.99385 22.9279 6.99385 22.2787 6.5934 21.8783C6.19302 21.4778 5.54374 21.4778 5.14329 21.8783L4.8877 22.1339V21.7383C4.8877 21.172 4.42859 20.7129 3.8623 20.7129C3.29602 20.7129 2.83691 21.172 2.83691 21.7383V22.1339L2.55719 21.8542C2.15681 21.4537 1.50753 21.4537 1.10708 21.8542C0.706631 22.2546 0.706631 22.9038 1.10708 23.3043L1.38688 23.584H1.02539C0.459102 23.584 0 24.0431 0 24.6094C0 25.1757 0.459102 25.6348 1.02539 25.6348H1.38681L1.13121 25.8904C0.730762 26.2908 0.730762 26.94 1.13121 27.3405C1.33144 27.5407 1.59387 27.6408 1.85623 27.6408C2.11859 27.6408 2.38109 27.5408 2.58125 27.3405L2.83685 27.0849V27.4805C2.83685 28.0468 3.29595 28.5059 3.86224 28.5059C4.42853 28.5059 4.88763 28.0468 4.88763 27.4805V27.0849L5.16735 27.3646C5.36758 27.5648 5.63001 27.665 5.89237 27.665C6.15474 27.665 6.41724 27.5649 6.61739 27.3646C7.01784 26.9641 7.01784 26.3149 6.61739 25.9145L6.3378 25.6348H6.69922C7.26558 25.6348 7.72461 25.1757 7.72461 24.6094Z"
              fill="#7DD5F4"
            />
            <path
              d="M35 24.6094C35 24.0431 34.5409 23.584 33.9746 23.584H33.6132L33.8688 23.3284C34.2692 22.9279 34.2692 22.2787 33.8688 21.8783C33.4684 21.4778 32.8191 21.4778 32.4187 21.8783L32.1631 22.1339V21.7383C32.1631 21.172 31.704 20.7129 31.1377 20.7129C30.5714 20.7129 30.1123 21.172 30.1123 21.7383V22.1339L29.8326 21.8542C29.4322 21.4537 28.7829 21.4537 28.3825 21.8542C27.982 22.2546 27.982 22.9038 28.3825 23.3043L28.6622 23.584H28.3008C27.7345 23.584 27.2754 24.0431 27.2754 24.6094C27.2754 25.1757 27.7345 25.6348 28.3008 25.6348H28.6622L28.4066 25.8904C28.0062 26.2908 28.0062 26.94 28.4066 27.3405C28.6068 27.5407 28.8693 27.6408 29.1316 27.6408C29.394 27.6408 29.6565 27.5408 29.8566 27.3405L30.1122 27.0849V27.4805C30.1122 28.0468 30.5713 28.5059 31.1376 28.5059C31.7039 28.5059 32.163 28.0468 32.163 27.4805V27.0849L32.4427 27.3646C32.643 27.5648 32.9054 27.665 33.1678 27.665C33.4301 27.665 33.6926 27.5649 33.8928 27.3646C34.2932 26.9641 34.2932 26.3149 33.8928 25.9145L33.6132 25.6348H33.9746C34.541 25.6348 35 25.1757 35 24.6094Z"
              fill="#4793FF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.7921 25.5665C12.3569 25.5665 12.8175 25.1059 12.8175 24.5411C12.8175 23.9764 12.3569 23.5157 11.7921 23.5157C11.2273 23.5157 10.7667 23.9764 10.7667 24.5411C10.7667 25.1059 11.2273 25.5665 11.7921 25.5665Z"
              fill="#FFF4F4"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.2081 25.5665C23.7729 25.5665 24.2335 25.1059 24.2335 24.5411C24.2335 23.9764 23.7729 23.5157 23.2081 23.5157C22.6433 23.5157 22.1827 23.9764 22.1827 24.5411C22.1827 25.1059 22.6433 25.5665 23.2081 25.5665Z"
              fill="#FFF4F4"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.22076 35C6.78555 35 7.24615 34.5394 7.24615 33.9746C7.24615 33.4098 6.78555 32.9492 6.22076 32.9492C5.65598 32.9492 5.19537 33.4098 5.19537 33.9746C5.19537 34.5394 5.65598 35 6.22076 35Z"
              fill="#FFF4F4"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28.7794 35C29.3442 35 29.8048 34.5394 29.8048 33.9746C29.8048 33.4098 29.3442 32.9492 28.7794 32.9492C28.2146 32.9492 27.754 33.4098 27.754 33.9746C27.754 34.5394 28.2146 35 28.7794 35Z"
              fill="#FFF4F4"
            />
            <path
              d="M17.5 21.8067C16.1296 21.8067 14.7886 21.3335 13.7241 20.4742C13.1138 19.9815 12.6073 19.3736 12.2317 18.6938C11.4154 19.244 10.443 19.5508 9.43952 19.5508C7.16302 19.5508 5.20959 18.0017 4.62662 15.8799C3.54593 15.8002 2.51029 15.3706 1.68581 14.6424C0.614481 13.6961 0 12.3332 0 10.9033C0 8.26942 2.05119 6.10557 4.64002 5.92524C4.8881 5.05359 5.3716 4.26131 6.04904 3.63377C6.97394 2.77689 8.17809 2.30501 9.43952 2.30501C10.4344 2.30501 11.3996 2.60702 12.2121 3.14904C12.5858 2.46127 13.0931 1.8459 13.7067 1.34675C14.7743 0.47831 16.1215 0 17.5 0C18.8784 0 20.2256 0.47831 21.2932 1.34668C21.9069 1.84584 22.4141 2.46121 22.7879 3.14897C23.6003 2.60695 24.5655 2.30494 25.5604 2.30494C26.8219 2.30494 28.026 2.77682 28.9509 3.6337C29.6285 4.26145 30.112 5.0538 30.36 5.92579C31.4448 6.00276 32.4848 6.4324 33.3125 7.16275C34.3849 8.10911 35 9.47247 35 10.9032C35 12.3332 34.3855 13.696 33.3142 14.6423C32.4898 15.3704 31.4539 15.8001 30.3733 15.8797C29.7903 18.0015 27.8369 19.5507 25.5604 19.5507C24.557 19.5507 23.5846 19.2439 22.7683 18.6937C22.3927 19.3735 21.8862 19.9814 21.2759 20.4741C20.2113 21.3335 18.8704 21.8067 17.5 21.8067Z"
              fill="#FFF4F4"
            />
            <path
              d="M33.3125 7.16283C32.4849 6.43241 31.4448 6.00284 30.3601 5.92587C30.112 5.05388 29.6285 4.26146 28.9509 3.63378C28.026 2.77689 26.8219 2.30501 25.5605 2.30501C24.5656 2.30501 23.6004 2.60702 22.7879 3.14904C22.4142 2.46128 21.9069 1.84591 21.2933 1.34675C20.2256 0.478311 18.8785 0 17.5 0V21.8066C18.8703 21.8066 20.2113 21.3335 21.2758 20.4742C21.8862 19.9815 22.3927 19.3736 22.7683 18.6938C23.5845 19.244 24.5569 19.5508 25.5604 19.5508C27.8369 19.5508 29.7903 18.0016 30.3733 15.8798C31.4539 15.8002 32.4897 15.3705 33.3142 14.6424C34.3855 13.6961 35 12.3333 35 10.9033C35.0001 9.47256 34.385 8.1092 33.3125 7.16283Z"
              fill="#F6EFEA"
            />
            <path
              d="M21.3623 31.1036C21.3623 30.5373 20.9032 30.0782 20.3369 30.0782H19.9755L20.2311 29.8226C20.6315 29.4221 20.6315 28.7729 20.2311 28.3725C19.8307 27.972 19.1814 27.972 18.781 28.3725L18.5254 28.6281V28.2325C18.5254 27.6663 18.0663 27.2072 17.5 27.2072V35.0001C18.0663 35.0001 18.5254 34.541 18.5254 33.9747V33.5791L18.8051 33.8588C19.0053 34.0591 19.2678 34.1592 19.5301 34.1592C19.7925 34.1592 20.055 34.0591 20.2552 33.8588C20.6556 33.4584 20.6556 32.8092 20.2552 32.4087L19.9755 32.1289H20.3369C20.9033 32.1289 21.3623 31.6699 21.3623 31.1036Z"
              fill="#4793FF"
            />
          </g>
          <defs>
            <clipPath id="clip0_101_69">
              <rect width="35" height="35" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "Thunderstorm":
      return (
        <svg
          width="411"
          height="326"
          viewBox="0 0 411 326"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_1_24)">
            <g filter="url(#filter1_i_1_24)">
              <path
                d="M326.747 95.0084C327.549 90.4546 327.967 85.7701 327.967 80.9888C327.967 36.2599 291.369 0 246.223 0C212.661 0 183.823 20.0397 171.234 48.7007C161.035 39.9768 147.801 34.7095 133.339 34.7095C101.092 34.7095 74.9504 60.8972 74.9504 93.2014C74.9504 95.0003 75.0315 96.7801 75.1902 98.5376C59.6799 106.065 49 121.858 49 140.124C49 165.683 69.9131 186.403 95.7108 186.403H316.289C342.087 186.403 363 165.683 363 140.124C363 118.126 347.51 99.7132 326.747 95.0084Z"
                fill="url(#paint0_linear_1_24)"
              />
            </g>
          </g>
          <g filter="url(#filter2_i_1_24)">
            <path
              d="M233.775 186.5H183.75L162 244.986H201.15L183.025 318L249 222.211H220L233.775 186.5Z"
              fill="url(#paint1_linear_1_24)"
            />
          </g>
          <g filter="url(#filter3_f_1_24)">
            <rect
              x="77"
              y="153"
              width="257"
              height="50"
              rx="25"
              fill="#FFED8D"
            />
          </g>
          <g filter="url(#filter4_di_1_24)">
            <path
              d="M268.151 292.575C260.385 296.024 257.354 298.938 254.575 306.151C252.363 299.161 249.642 296.043 241 292.575C249.89 289.679 252.303 286.326 254.575 279C257.368 285.752 259.092 289.437 268.151 292.575Z"
              fill="url(#paint2_linear_1_24)"
            />
          </g>
          <g filter="url(#filter5_i_1_24)">
            <path
              d="M142.151 216.575C134.385 220.024 131.354 222.938 128.575 230.151C126.363 223.161 123.642 220.043 115 216.575C123.89 213.679 126.303 210.326 128.575 203C131.368 209.752 133.092 213.437 142.151 216.575Z"
              fill="url(#paint3_linear_1_24)"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_1_24"
              x="22"
              y="-27"
              width="368"
              height="240.403"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="13.5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1_24"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1_24"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_i_1_24"
              x="49"
              y="0"
              width="314"
              height="196.403"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="11" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1_24"
              />
            </filter>
            <filter
              id="filter2_i_1_24"
              x="160"
              y="186.5"
              width="89"
              height="131.5"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-2" />
              <feGaussianBlur stdDeviation="4.5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1_24"
              />
            </filter>
            <filter
              id="filter3_f_1_24"
              x="0"
              y="76"
              width="411"
              height="204"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="38.5"
                result="effect1_foregroundBlur_1_24"
              />
            </filter>
            <filter
              id="filter4_di_1_24"
              x="232.233"
              y="279"
              width="44.6855"
              height="46.9181"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="11" />
              <feGaussianBlur stdDeviation="4.38372" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.285052 0 0 0 0 0.179688 0 0 0 0 0.9375 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_24"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_24"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.44 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_1_24"
              />
            </filter>
            <filter
              id="filter5_i_1_24"
              x="115"
              y="203"
              width="27.1506"
              height="31.1507"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.44 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1_24"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1_24"
              x1="68.9717"
              y1="169.76"
              x2="385.746"
              y2="-67.1272"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0.58" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1_24"
              x1="194.747"
              y1="305.333"
              x2="279.616"
              y2="188.178"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF9900" />
              <stop offset="1" stopColor="#FFEE94" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_1_24"
              x1="250.648"
              y1="307.423"
              x2="263.425"
              y2="283.433"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF9900" />
              <stop offset="1" stopColor="#FFEE94" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_1_24"
              x1="124.648"
              y1="231.423"
              x2="137.425"
              y2="207.433"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF9900" />
              <stop offset="1" stopColor="#FFEE94" />
            </linearGradient>
          </defs>
        </svg>
      );
    default:
      return null;
  }
};

export default IconSelector;

IconSelector.propTypes = {
  icon: PropTypes.string,
};
