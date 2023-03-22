import React, { useState, useRef, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import BuilderCanvas from "./BuilderCanvas/BuilderCanvas";
import svgElements from "../SvgButton/SvgComponenet";
import ViewBoard from "./ViewBoard";
const Builder = () => {
  const [planeComponents, setPlaneComponents] = useState({
    front: {
      engine_front: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
          <ellipse
            id="shape0"
            transform="translate(20, 20)"
            rx="90"
            ry="90"
            cx="100"
            cy="101"
            strokeWidth="7.2"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            fill="none"
          />
          <ellipse
            id="shape1"
            transform="translate(45, 47)"
            rx="70"
            ry="70"
            cx="75"
            cy="73"
            strokeWidth="7.2"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            fill="none"
          />
        </svg>
      ),
      wheel_front: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
          <path
            id="shape0"
            transform="translate(27, 65)"
            strokeWidth="7.2"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            fill="none"
            d="M55.44 0.36L0 0C0 77.04 0 115.56 0 115.56L54 115.56L54 115.56L54 115.56Z"
          />
          <path
            id="shape1"
            transform="translate(157, 65)"
            strokeWidth="7.2"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            fill="none"
            d="M2.16 113.04L59.04 113.04L58.68 0L0 0.36L0 112.68"
          />
          <path
            id="shape2"
            transform="translate(84, 108)"
            strokeWidth="7.2"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            fill="none"
            d="M0 0L70.56 0 "
          />
          <path
            id="shape3"
            transform="translate(84, 142)"
            strokeWidth="7.2"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            fill="none"
            d="M0 0L73.8 1.08"
          />
        </svg>
      ),

      fuselage_front: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
          <defs />
          <ellipse
            id="shape0"
            transform="translate(7.44, 7.92)"
            rx="112.32"
            ry="111.96"
            cx="112.32"
            cy="111.96"
            fill="none"
            strokeWidth="6"
            strokeLinecap="square"
            strokeLinejoin="bevel"
          />
          <ellipse
            id="shape1"
            transform="translate(74.4, 110.399999760961)"
            rx="45.6"
            ry="44.1599968207885"
            cx="45.6"
            cy="44.1599968207885"
            fill="none"
            strokeWidth="6"
            strokeLinecap="square"
            strokeLinejoin="bevel"
          />
          <path
            id="shape2"
            transform="translate(52.9199982430673, 74.5199975259519)"
            fill="none"
            strokeWidth="6"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 23.76L13.68 1.08L27 0L67.08 3.96L104.4 0L117 1.08L129.24 21.96L131.04 25.2L101.88 23.04L67.08 27L29.88 23.76C29.88 24 19.92 24 0 23.76Z"
          />
          <path
            id="shape3"
            transform="translate(81.3599972988654, 75.5999974900962)"
            fill="none"
            strokeWidth="6"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0.36 20.88L0 0"
          />
          <path
            id="shape4"
            transform="translate(120, 80.2799973347212)"
            fill="none"
            strokeWidth="6"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 19.08L0 0"
          />
          <path
            id="shape5"
            transform="translate(155.519994836769, 76.3199974661923)"
            fill="none"
            strokeWidth="6"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 20.52L1.44 0"
          />
          <path
            id="shape6"
            transform="translate(10.4399996533942, 61.5599979562212)"
            fill="none"
            strokeWidth="6"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M17.28 0C15.36 0 21.48 0.36 35.64 1.08C28.68 11.16 22.44 33.36 16.92 67.68L0 66.96C0 61.28 5.76 38.96 17.28 0Z"
          />
          <path
            id="shape7"
            transform="translate(190.799993665481, 60.4799979920769)"
            fill="none"
            strokeWidth="6"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M34.2 70.2C33 39.24 27.6 15.84 18 0L0 0C9.36 19.44 15.72 42.6 19.08 69.48Z"
          />
        </svg>
      ),
      wing_front: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 235.68 28.32">
          <defs />
          <path
            id="shape0"
            transform="translate(-4.78897862096946, 5.61042520823509)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M229.418 0C228.938 2.04 217.818 4.04 196.058 6C162.698 9.72 138.758 11.96 124.238 12.72L103.139 12.6211L103.139 12.6211C104.892 12.6494 93.4654 11.617 68.8581 9.52394L68.8581 9.52394L68.8581 9.52394C26.3468 5.87527 3.39411 2.73572 0 0.105285C0.226274 1.74577 6.80237 3.41455 19.7283 5.1116C40.2909 7.4592 67.5146 11.8857 101.399 18.3911C102.785 18.8153 103.832 19.8901 104.539 21.6155C104.567 22.068 108.193 22.3226 115.418 22.3791C121.938 22.2597 125.098 22.06 124.898 21.78C125.778 19.94 126.938 18.8 128.378 18.36C154.458 13.44 179.158 9.4 202.478 6.24C219.678 3.52 228.658 1.44 229.418 0Z"
          />
        </svg>
      ),

      strut: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 240">
          <defs />
          <path
            id="shape0"
            transform="translate(15, 20.9252669039146)"
            fill="none"
            strokeWidth="9.6"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeMiterlimit="2"
            d="M0 0L0 198.149"
          />
        </svg>
      ),
      horizontal_stabilizer_front: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 31.68">
          <defs />
          <path
            id="shape0"
            transform="translate(1.41706292130659, 6.86866091831617)"
            fill="none"
            stroke="#000000"
            strokeWidth="1.2"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M120.369 19.0513L9.85095 0.185872L0 4.36162e-06L0 4.36162e-06L0 4.36162e-06L9.38628 4.36162e-06L120.369 9.20042L225.085 0.0929335L237.166 0L237.166 0L225.921 0Z"
          />
        </svg>
      ),
      vertical_stabilizer_front: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.28 219.6">
          <defs />
          <path
            id="shape0"
            transform="translate(9.12000022633765, 3.6000000893438)"
            fill="none"
            stroke="#000000"
            strokeWidth="3.0264"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M9.12 0L18 211.2L0 211.44Z"
          />
        </svg>
      ),
    },

    side: {
      engine_side: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 222.72 110.88">
          <defs />
          <path
            id="shape0"
            transform="translate(172.420919703092, 39.8808229628216)"
            fill="none"
            stroke="#000000"
            strokeWidth="1.2"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M1.86676 0C6.39225 0.452548 8.59842 1.75362 8.48528 3.90323C8.59842 24.0416 8.65499 34.1108 8.65499 34.1108L8.65499 36.1473C7.63675 38.6363 4.75176 39.4848 0 38.6929"
          />
          <path
            id="shape1"
            transform="translate(180.906201184544, 42.596113036886)"
            fill="none"
            stroke="#000000"
            strokeWidth="1.2"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C24.3245 8.37214 36.4867 12.5582 36.4867 12.5582C40.2202 15.8392 38.7495 18.7808 32.0744 21.3829C11.144 27.0398 0.678823 29.8682 0.678823 29.8682"
          />
          <path
            id="shape2"
            transform="translate(5.48920566663952, 3.7198978099339)"
            fill="none"
            stroke="#000000"
            strokeWidth="1.2"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M154.373 78.5873C162.633 78.8136 167.101 76.7771 167.78 72.4779C167.78 72.4779 167.724 57.4307 167.611 27.3362C168.629 25.9786 163.481 25.2432 152.167 25.1301C151.489 25.1301 153.355 22.9805 157.768 18.6812C151.093 14.2689 134.688 9.29087 108.553 3.74715C88.6408 -2.47539 54.926 -0.948039 7.40842 8.3292C1.8647 9.34744 -0.567742 14.0426 0.11108 22.4148C0.11108 22.4148 1.07275 41.8178 2.99608 80.6238C1.8647 88.7697 5.31539 94.5397 13.3481 97.9338C59.8475 108.229 107.818 106.023 157.258 91.3153C152.507 86.9029 150.131 84.6967 150.131 84.6967C152.959 80.1713 154.373 78.1348 154.373 78.5873Z"
          />
          <path
            id="shape3"
            transform="translate(154.262415572593, 28.6802510800531)"
            fill="none"
            stroke="#000000"
            strokeWidth="1.2"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M4.92146 53.4573C1.75362 50.1763 0.169706 48.5358 0.169706 48.5358C4.46891 44.3497 6.61852 42.2567 6.61852 42.2567C3.11127 37.5049 1.35765 35.1291 1.35765 35.1291L6.78823 28.85C2.26274 25.6821 0 24.0982 0 24.0982C4.63862 19.3464 6.95793 16.9706 6.95793 16.9706C2.43245 13.4633 0.169706 11.7097 0.169706 11.7097C3.90323 8.88126 5.76999 7.46705 5.76999 7.46705C4.18607 2.48902 3.39411 0 3.39411 0"
          />
        </svg>
      ),

      horizontal_stabilizer_side: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 228.24 45.84">
          <defs />
          <path
            id="shape0"
            transform="translate(5.24732071111601, 4.91200026106231)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.96"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M6.12296 24.0228C24.7906 24.9845 50.7838 22.4672 84.1027 16.4709C105.016 12.5356 119.273 9.768 126.873 8.168C155.273 2.968 180.713 0.248 203.193 0.008C210.073 -0.072 214.433 0.448 216.273 1.568C197.713 9.968 170.873 18.368 135.753 26.768C89.9927 33.888 53.7127 37.368 26.9127 37.208C9.39268 36.568 0.43268 33.568 0.0326796 28.208C-0.28732 25.488 1.74277 24.0929 6.12296 24.0228Z"
          />
        </svg>
      ),
      fuselage_side: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 32.64">
          <defs />
          <path
            id="shape0"
            transform="translate(4.9777418245597, 5.80223649095491)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M3.06451 10.74C-0.695491 14.26 -0.995491 16.58 2.16451 17.7C10.0845 20.3 30.7645 21.38 64.2045 20.94C139.885 20.9 177.725 20.88 177.725 20.88C199.005 17.16 216.445 13.06 230.045 8.58C229.965 7.54 229.665 7 229.145 6.96C205.625 2.88 192.805 1 190.685 1.32C158.125 1 106.125 0.56 34.6845 0C21.3245 0.24 12.0845 2.42 6.96451 6.54C4.48451 9.34 3.18451 10.74 3.06451 10.74Z"
          />
          <path
            id="shape1"
            transform="translate(10.3500006998148, 12.7500008620908)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M1.5 0C4.7 0 6.3 0 6.3 0C6.84 0.58 6.77 1.21 6.09 1.89C2.03 1.87 0 1.86 0 1.86"
          />
          <path
            id="shape2"
            transform="translate(12.7500008620908, 12.8100008661477)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 1.74C0.88 0.58 1.32 0 1.32 0"
          />
          <path
            id="shape3"
            transform="translate(8.97000015742177, 16.32)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0.45 7.62C0.15 2.54 0 0 0 0"
          />
          <path
            id="shape4"
            transform="translate(24.8400004359372, 10.837500190196)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M3.33 0.2025C3.33 0.2025 3.36 2.3625 3.42 6.6825C3.42 6.7625 2.29 6.7725 0.03 6.7125C0.03 6.7125 0.02 4.4825 0 0.0225C2.3 -0.0375 3.41 0.0225 3.33 0.2025Z"
          />
          <path
            id="shape5"
            transform="translate(38.2686203243624, 18.4342744245404)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M8.95197 0.190919C8.95197 0.190919 8.92369 1.94454 8.86712 5.45179C8.86712 5.45179 5.91141 5.48008 0 5.53665C0 5.53665 0 3.75474 0 0.190919C6.02455 -0.0636396 9.00854 -0.0636396 8.95197 0.190919Z"
          />
          <path
            id="shape6"
            transform="translate(76.0281227388715, 10.8611603912674)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.0565685 4.1295 0.0848528 6.19426 0.0848528 6.19426C2.71529 6.16597 4.03051 6.15183 4.03051 6.15183C3.97394 2.13546 3.94566 0.127279 3.94566 0.127279C1.45664 0.240416 0.141421 0.19799 0 0Z"
          />
          <path
            id="shape7"
            transform="translate(158.801272925274, 18.7029747623061)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0.000771389 0.00707107C0.113908 3.3729 0.170477 5.05581 0.170477 5.05581C6.11017 5.16895 9.06588 5.22552 9.0376 5.22552C9.12245 1.85969 9.16488 0.176777 9.16488 0.176777C2.9989 0.0353553 -0.0557972 -0.0212132 0.000771389 0.00707107Z"
          />
          <path
            id="shape8"
            transform="translate(191.300672672752, 10.9799543330468)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0.135765C0.113137 4.35012 0.169706 6.4573 0.169706 6.4573C2.37588 6.31588 3.47897 6.24517 3.47897 6.24517C3.53553 2.08738 3.56382 0.00848528 3.56382 0.00848528C1.32936 -0.019799 0.141421 0.0226274 0 0.135765Z"
          />
          <path
            id="shape9"
            transform="translate(32.7150002232424, 12.6900000865947)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape0"
            transform="matrix(1.00000000699364 0 0 1.00000000699364 34.8693650896384 12.6926895657435)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape01"
            transform="matrix(1.00000000699364 0 0 1.00000000699364 37.0593651045826 12.6626895655388)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape02"
            transform="matrix(0.99999996730911 0 0 0.99999996730911 39.0198547201424 12.701689432067)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape03"
            transform="matrix(0.99999997430275 0 0 0.99999997430275 41.1742195161103 12.7043789111279)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape01"
            transform="matrix(0.99999997430275 0 0 0.99999997430275 43.3642194594615 12.6743789119039)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape04"
            transform="matrix(1.00000002473744 0 0 1.00000002473744 45.2937406222625 12.6810412616434)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape05"
            transform="matrix(1.00000003173108 0 0 1.00000003173108 47.448105541952 12.6837307408587)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape011"
            transform="matrix(1.00000003173108 0 0 1.00000003173108 49.6381056110712 12.6837307415268)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape02"
            transform="matrix(0.999999992046545 0 0 0.999999992046545 51.5985952751285 12.6927306074049)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape03"
            transform="matrix(0.999999999040185 0 0 0.999999999040185 53.7529601243898 12.6954200865323)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape012"
            transform="matrix(0.999999999040185 0 0 0.999999999040185 55.942960121916 12.6654200865662)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape06"
            transform="matrix(1.00000002853758 0 0 1.00000002853758 57.9474803259528 12.6720822062883)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape013"
            transform="matrix(1.00000003553122 0 0 1.00000003553122 60.1018452538292 12.6747716855138)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape014"
            transform="matrix(1.00000003553122 0 0 1.00000003553122 62.2918453312707 12.644771684453)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape021"
            transform="matrix(0.999999995846684 0 0 0.999999995846684 64.2523350027781 12.6837715520942)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape031"
            transform="matrix(1.00000000284032 0 0 1.00000000284032 66.4066998602263 12.6864610312318)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape011"
            transform="matrix(1.00000000284032 0 0 1.00000000284032 68.5966998660748 12.6564610311517)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape07"
            transform="matrix(1.00000002853758 0 0 1.00000002853758 70.6932667269553 12.6357617543245)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape015"
            transform="matrix(1.00000003553122 0 0 1.00000003553122 72.8476316548317 12.63845123355)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape10"
            transform="translate(184.76699605911, 19.537359744023)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0.190919C0.0424264 3.04763 0.0636396 4.47599 0.0636396 4.47599L3.8608 4.53963L3.8608 0C3.8608 0 2.57387 0.0636396 0 0.190919Z"
          />
          <path
            id="shape08"
            transform="matrix(1.00000002473744 0 0 1.00000002473744 82.6954715044636 12.9125835199542)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape09"
            transform="matrix(1.00000003173108 0 0 1.00000003173108 84.8498364241531 12.9152729991695)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape016"
            transform="matrix(1.00000003173108 0 0 1.00000003173108 87.0398364932723 12.8852729982227)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape022"
            transform="matrix(0.999999992046545 0 0 0.999999992046545 89.0003261573296 12.9242728657156)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape032"
            transform="matrix(0.999999999040185 0 0 0.999999999040185 91.1546910065909 12.9269623448431)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape017"
            transform="matrix(0.999999999040185 0 0 0.999999999040185 93.3446910041171 12.896962344877)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape04"
            transform="matrix(1.00000004947488 0 0 1.00000004947488 95.2742122146495 12.9036246947813)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape05"
            transform="matrix(1.00000005646852 0 0 1.00000005646852 97.4285771876325 12.9063141740631)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape0111"
            transform="matrix(1.00000005646852 0 0 1.00000005646852 99.6185773109267 12.9063141747312)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape023"
            transform="matrix(1.00000001678398 0 0 1.00000001678398 101.579067023481 12.9153140408319)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape033"
            transform="matrix(1.00000002377762 0 0 1.00000002377762 103.733431926036 12.9180035200259)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape012"
            transform="matrix(1.00000002377762 0 0 1.00000002377762 105.923431977737 12.8880035193176)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape06"
            transform="matrix(1.00000005327502 0 0 1.00000005327502 107.927952231361 12.8946656392045)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape013"
            transform="matrix(1.00000006026866 0 0 1.00000006026866 110.082317212531 12.8973551184966)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape014"
            transform="matrix(1.00000006026866 0 0 1.00000006026866 112.272317344147 12.8673551166936)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape021"
            transform="matrix(1.00000002058412 0 0 1.00000002058412 114.232807064152 12.9063549852996)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape031"
            transform="matrix(1.00000002757776 0 0 1.00000002757776 116.357171974628 12.9090444645037)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape0112"
            transform="matrix(1.00000002757776 0 0 1.00000002757776 118.517172034385 12.8790444636815)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape07"
            transform="matrix(1.00000005327502 0 0 1.00000005327502 120.613738947129 12.8583451863423)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape015"
            transform="matrix(1.00000006026866 0 0 1.00000006026866 122.768103928299 12.8610346656343)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape0311"
            transform="matrix(1.0000000050005 0 0 1.0000000050005 124.73891827821 12.8685063063771)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape0113"
            transform="matrix(1.0000000050005 0 0 1.0000000050005 126.8989182892 12.8385063062322)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape071"
            transform="matrix(1.00000003069776 0 0 1.00000003069776 128.995485154609 12.8178070293603)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape0151"
            transform="matrix(1.0000000376914 0 0 1.0000000376914 131.149850087139 12.8204965085916)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape0121"
            transform="matrix(0.999999974117412 0 0 0.999999974117412 144.713923913596 12.6786825033437)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape061"
            transform="matrix(1.00000000361481 0 0 1.00000000361481 146.718444067675 12.6853446228998)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape0131"
            transform="matrix(1.00000001060845 0 0 1.00000001060845 148.872808941859 12.6880341020583)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape0141"
            transform="matrix(1.00000001060845 0 0 1.00000001060845 151.062808964719 12.6580341017451)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape0211"
            transform="matrix(0.999999970923912 0 0 0.999999970923912 153.023298587366 12.6970339684144)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape0312"
            transform="matrix(0.999999977917552 0 0 0.999999977917552 155.147663392345 12.6997234474849)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape0114"
            transform="matrix(0.999999977917552 0 0 0.999999977917552 157.307663344836 12.6697234481526)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape072"
            transform="matrix(1.00000000361481 0 0 1.00000000361481 159.404230153464 12.6490241718413)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape0152"
            transform="matrix(1.00000001060845 0 0 1.00000001060845 161.558595027648 12.6517136509997)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape0311"
            transform="matrix(0.999999955340293 0 0 0.999999955340293 163.529409279688 12.6591852913715)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape0111"
            transform="matrix(0.999999955340293 0 0 0.999999955340293 165.689409183412 12.6291852927164)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape071"
            transform="matrix(0.999999981037551 0 0 0.999999981037551 167.785975944705 12.6084860168724)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape0212"
            transform="matrix(0.999999966816843 0 0 0.999999966816843 171.922807429305 12.637713205738)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape0313"
            transform="matrix(0.999999973810483 0 0 0.999999973810483 174.047172225559 12.6404026847974)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape0115"
            transform="matrix(0.999999973810483 0 0 0.999999973810483 176.207172169179 12.6104026855884)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape073"
            transform="matrix(0.999999999507741 0 0 0.999999999507741 178.303738969196 12.5897034093621)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape0153"
            transform="matrix(1.00000000650138 0 0 1.00000000650138 180.458103834532 12.5923928885094)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape03111"
            transform="matrix(0.999999951233224 0 0 0.999999951233224 182.428918078478 12.5998645288505)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape01111"
            transform="matrix(0.999999951233224 0 0 0.999999951233224 184.588917973331 12.5698645303187)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape0711"
            transform="matrix(0.999999976930482 0 0 0.999999976930482 186.685484726013 12.5491652545597)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.03 1.24 0.035 1.835 0.015 1.785L1.215 1.74L1.215 0.12C1.215 0.12 0.81 0.08 0 0Z"
          />
          <path
            id="shape11"
            transform="translate(230.035970049827, 12.0490991320824)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.48"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 3.60624C0.0282843 1.20208 0.0424264 0 0.0424264 0"
          />
        </svg>
      ),
      vertical_stabilizer_side: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 240 182.16"
        >
          <defs />
          <path
            id="shape0"
            transform="translate(0, 6.55329351143686)"
            fill="none"
            stroke="#000000"
            strokeWidth="1.2"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 151.487C22.08 150.527 33.88 149.727 35.4 149.087C47.08 146.447 62.36 135.927 81.24 117.527C149.08 48.1667 183 13.4867 183 13.4867C197.88 2.52671 215.92 -1.75329 237.12 0.646707L237.72 0.646707C222.84 37.7667 200.48 94.3267 170.64 170.327C132.8 166.407 75.92 160.127 0 151.487Z"
          />
          <path
            id="shape1"
            transform="translate(128.806568948039, 6.95793060193624)"
            fill="none"
            stroke="#000000"
            strokeWidth="1.2"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 164.275C63.6962 54.7583 95.5443 -5.92119e-15 95.5443 0"
          />
        </svg>
      ),
      wing_side: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 240 70.56"
        >
          <defs />
          <path
            id="shape0"
            transform="translate(123.460847959344, 37.4200920619044)"
            fill="none"
            stroke="#000000"
            strokeWidth="1.2"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M34.026 3.56382C25.371 6.73166 14.029 6.90136 0 4.07294C15.8958 1.35765 23.8436 0 23.8436 0C30.4056 2.31931 33.7997 3.50725 34.026 3.56382Z"
          />
          <path
            id="shape1"
            transform="translate(140.685969702126, 30.0378970292838)"
            fill="none"
            stroke="#000000"
            strokeWidth="1.2"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M29.6136 2.885C26.9549 3.84666 17.0837 3.47897 0 1.78191C14.9341 0.59397 22.4011 0 22.4011 0C28.85 0.169706 31.2541 1.13137 29.6136 2.885Z"
          />
          <path
            id="shape2"
            transform="translate(159.438442141312, 24.8300554186276)"
            fill="none"
            stroke="#000000"
            strokeWidth="1.2"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M30.1227 2.5774C30.1227 2.5774 20.0818 2.23799 0 1.55917C15.0472 -0.816708 25.0881 -0.477297 30.1227 2.5774Z"
          />
          <path
            id="shape3"
            transform="translate(8.1011712587665, 5.1600000773715)"
            fill="none"
            stroke="#000000"
            strokeWidth="1.2"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M71.8188 33.12C71.8188 33.12 69.673 33.1445 65.3814 33.1935C65.3814 33.1935 64.1651 33.1935 61.7327 33.1935C41.3115 32.0055 27.7935 32.421 21.1788 34.44C-0.341171 43.48 -5.46117 50.52 5.81883 55.56C15.6588 58.2 25.3788 59.44 34.9788 59.28C107.699 61.04 152.179 60.76 168.419 58.44C176.579 55.8 178.739 52.64 174.899 48.96C159.379 40.64 151.019 36.72 149.819 37.2C145.797 37.5271 143.616 37.5775 143.276 37.3513C142.767 37.8604 142.548 39.13 142.619 41.16C117.339 49.8 85.6188 53.36 47.4588 51.84C36.3388 50.08 34.3388 47.48 41.4588 44.04C70.2588 31.24 132.779 16.56 229.019 0C224.749 2.78254 213.874 6.26685 196.394 10.4529C196.394 10.4529 188.757 13.3379 173.484 19.1079"
          />
          <path
            id="shape4"
            transform="translate(152.563792659039, 33.6017153208938)"
            fill="none"
            stroke="#000000"
            strokeWidth="1.2"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0.00157135 5.85484C-0.0549972 3.07047 1.41578 1.11886 4.41392 0"
          />
          <path
            id="shape5"
            transform="translate(166.311520275131, 27.4074597188098)"
            fill="none"
            stroke="#000000"
            strokeWidth="1.2"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 2.20617C4.58205 0.735391 6.87308 0 6.87308 0"
          />
        </svg>
      ),
    },

    top: {
      fuselage_top: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 203.04 23.28">
          <defs />
          <path
            id="shape0"
            transform="translate(1.93874352990065, 2.37587879633774)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M196.661 8.36412C196.541 8.20412 192.221 6.94412 183.701 4.58412C180.501 4.58412 170.183 3.05608 152.748 0C82.3635 0.296081 40.1209 0.472858 26.0203 0.53033C16.6157 0.403051 8.66107 2.18431 2.15626 5.87412C-0.713744 7.61412 -0.718743 9.66412 2.14126 12.0241C8.86126 15.2241 15.4213 16.8041 21.8213 16.7641C42.1413 17.1241 85.6813 17.3441 152.441 17.4241C169.921 14.6241 178.661 13.2241 178.661 13.2241C181.941 13.0241 183.581 12.9241 183.581 12.9241C192.301 10.4841 196.661 8.96412 196.661 8.36412Z"
          />
          <path
            id="shape1"
            transform="translate(194.100001191661, 9.72000005967513)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 2.82C0 0.94 0 0 0 0"
          />
          <path
            id="shape2"
            transform="translate(160.88093054211, 3.45775206729482)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.537401 2.40416 1.76777 2.58801 3.6911 0.551543"
          />
          <path
            id="shape3"
            transform="translate(160.66500394133, 17.4157696580017)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 1.42423C0.7 -0.185769 1.815 -0.430769 3.345 0.689231"
          />
          <path
            id="shape4"
            transform="translate(155.173729598961, 15.9966948978063)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0.0644996 3.41339C-0.147632 0.966797 0.163495 -0.164573 0.997881 0.0192744C2.80807 -0.122147 3.69903 0.818305 3.67074 2.84063"
          />
          <path
            id="shape5"
            transform="translate(133.005005709012, 16.3563260032721)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M8.13 3.39867C8.13 1.05867 7.915 -0.0513253 7.485 0.0686747C7.495 0.0686747 5.12 0.0486747 0.36 0.0086747C0.13 -0.111325 0.01 1.01367 0 3.38367"
          />
          <path
            id="shape6"
            transform="translate(132.943147936071, 2.48194483940008)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M8.358 0C8.358 2.41831 8.23072 3.63453 7.97616 3.64867C7.97616 3.64867 5.42351 3.64867 0.318198 3.64867C0.120208 3.62039 0.0141421 2.45366 0 0.148492"
          />
          <path
            id="shape7"
            transform="translate(112.408766700693, 2.69407687695565)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.0141421 0.947523 0.120208 1.41421 0.318198 1.40007C2.00111 1.40007 2.885 1.30815 2.96985 1.1243C2.96985 0.671751 2.96985 0.445477 2.96985 0.445477"
          />
          <path
            id="shape8"
            transform="translate(112.318674127532, 18.1348481433986)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0.00133333 1.44015C-0.0186667 0.470153 0.186333 -0.00984694 0.616333 0.000153061C2.22633 0.0401531 3.05133 0.125153 3.09133 0.255153C3.09133 0.835153 3.09133 1.16515 3.09133 1.24515"
          />
          <path
            id="shape9"
            transform="translate(62.3700034740041, 17.8746009956138)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 1.3254C0.04 0.3854 0.58 -0.0546 1.62 0.0054C2.76 -0.0346 3.33 0.3254 3.33 1.0854"
          />
          <path
            id="shape10"
            transform="translate(62.7290167469061, 3.06000001724239)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0.000983607 0C-0.0190164 0.71 0.265984 1.09 0.855984 1.14C2.19598 1.18 2.88098 0.855 2.91098 0.165"
          />
          <path
            id="shape11"
            transform="translate(29.7000011839403, 3.16500012616738)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M8.235 0C8.335 2.11 8.285 3.235 8.085 3.375C8.085 3.375 5.73 3.385 1.02 3.405C0.34 3.445 0 2.335 0 0.075"
          />
          <path
            id="shape12"
            transform="translate(18.5085204659043, 3.51078525742941)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.0141421 1.46371 0.148492 2.1991 0.403051 2.20617"
          />
          <path
            id="shape13"
            transform="translate(19.0070307592553, 3.46835884948464)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 2.36527C1.91626 1.67938 2.82843 1.25158 2.7365 1.08187C2.71529 0.360624 2.70468 0 2.70468 0"
          />
          <path
            id="shape14"
            transform="translate(18.4124998592086, 16.555549572203)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 2.15695C0.005 0.61195 0.1325 -0.10305 0.3825 0.0119503"
          />
          <path
            id="shape15"
            transform="translate(18.7649998565132, 16.447499874234)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C2.13 0.635 3.1975 1.0075 3.2025 1.1175C3.1975 2.0125 3.195 2.4525 3.195 2.4375"
          />
          <path
            id="shape16"
            transform="translate(5.99002925982393, 6.63705291119471)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0.649703 2.25128C2.33262 0.243096 3.91654 -0.421584 5.40146 0.257238C5.38713 0.661044 5.03497 1.06295 4.34497 1.46295C2.67497 3.12295 1.95497 4.12295 2.18497 4.46295C1.77497 4.52295 2.64497 5.68795 4.79497 7.95795C4.79497 7.97295 5.88997 8.73795 5.1469 9.26224C0.557779 8.1238 -0.9625 5.83985 0.586064 2.41038"
          />
          <path
            id="shape17"
            transform="translate(6.15000003155023, 11.2800000578677)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0.03C1.21 0.01 1.815 0 1.815 0"
          />
          <path
            id="shape18"
            transform="translate(8.16000004186177, 7.81500004009188)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C0.68 0.67 1.02 1.005 1.02 1.005"
          />
          <path
            id="shape19"
            transform="translate(8.35500004286214, 13.6500000700261)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0.75C0.72 0.25 1.08 0 1.08 0"
          />
        </svg>
      ),

      horizontal_stabilizer_top: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.84 224.16">
          <defs />
          <path
            id="shape0"
            transform="translate(2.19513531873253, 2.71528994106006)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.96"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M9.34485 85.5316C55.3916 30.7733 77.4534 4.41235 75.53 6.44881C83.1102 2.1496 90.6904 0 98.2706 0C92.6137 12.3319 81.5263 41.5779 65.0083 87.7378C63.8769 93.9603 63.9335 97.8636 65.178 99.4475C66.4225 101.71 66.6488 106.971 65.8568 115.23C63.1415 120.944 64.584 129.57 70.1843 141.11C73.635 150.953 81.4697 172.534 93.6885 205.853C95.8461 210.647 97.4049 213.885 98.3649 215.565C82.4449 214.765 72.1649 209.685 67.5249 200.325C27.9462 154.569 8.32661 131.409 8.66603 130.843C4.42338 128.015 1.84952 124.309 0.944419 119.727C-1.14862 105.302 0.237312 94.6675 5.10221 87.8227C7.13867 86.1256 8.55289 85.3619 9.34485 85.5316Z"
          />
        </svg>
      ),
      vertical_stabilizer_top: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 28.32">
          <defs />
          <path
            id="shape0"
            transform="translate(3.22440688461637, 6.6861346375563)"
            fill="none"
            stroke="#000000"
            strokeWidth="1.2"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M228.084 7.47387C228.084 7.47387 181.528 9.93807 88.4166 14.8665C88.4166 14.8665 58.9444 12.4023 0 7.47387C59.2838 1.54111 91.3582 -0.859575 96.2231 0.271796C183.904 5.07318 227.858 7.47387 228.084 7.47387Z"
          />
        </svg>
      ),
      engine_top: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 126.24">
          <defs />
          <path
            id="shape0"
            transform="translate(8.31557564980011, 4.76420259337526)"
            fill="none"
            stroke="#000000"
            strokeWidth="2.4"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M168.518 97.738C134.237 110.409 105.217 116.858 81.4587 117.084C40.6162 117.084 13.8593 112.898 1.18794 104.526C0.39598 101.472 0 99.9442 0 99.9442C0 43.4888 0 15.2611 0 15.2611C5.09117 9.03852 26.1912 4.06049 63.3002 0.326966C108.894 -1.59636 143.91 4.96559 168.348 20.0128C162.465 24.4252 159.523 26.6313 159.523 26.6313C171.968 26.6313 178.587 27.4233 179.379 29.0072C179.605 67.4738 179.718 86.7071 179.718 86.7071C175.872 89.9881 168.97 91.1195 159.014 90.1012C165.35 94.853 168.518 97.3986 168.518 97.738Z"
          />
          <path
            id="shape1"
            transform="translate(166.620006612069, 31.140001235745)"
            fill="none"
            stroke="#000000"
            strokeWidth="2.4"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M1.44 0C4.92 4.96 6.66 7.44 6.66 7.44C2.5 10.84 0.42 12.54 0.42 12.54C4.42 15.82 6.42 17.46 6.42 17.46C2.26 22.22 0.18 24.6 0.18 24.6C6.18 29.52 9.18 31.98 9.18 31.98C3.1 36.18 0.06 38.28 0.06 38.28C5.02 43.64 7.5 46.32 7.5 46.32C2.5 49.96 0 51.78 0 51.78C4.12 55.14 6.18 56.82 6.18 56.82C2.74 61.02 1.04 63.1 1.08 63.06"
          />
          <path
            id="shape2"
            transform="translate(187.948980728305, 43.2749346146435)"
            fill="none"
            stroke="#000000"
            strokeWidth="2.4"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0.0848528 0C4.94975 0.226274 7.21249 1.58392 6.87308 4.07294C6.98621 25.6821 7.04278 36.4867 7.04278 36.4867C6.53367 39.7677 4.18607 41.1253 0 40.5596"
          />
          <path
            id="shape3"
            transform="translate(195.246322643715, 45.4811077518606)"
            fill="none"
            stroke="#000000"
            strokeWidth="2.4"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C25.7387 9.78636 38.608 14.6795 38.608 14.6795C41.3233 16.6524 41.3233 18.8869 38.608 21.3829C13.1522 30.7733 0.424264 35.4685 0.424264 35.4685"
          />
        </svg>
      ),
      wing_top: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.48 238.56">
          <defs />
          <path
            id="shape0"
            transform="translate(8.28000011996889, 3.12000004520567)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M48.9 101.58C49.14 86.5 49.82 76.16 50.94 70.56C50.94 70.56 59.56 50.42 76.8 10.14C78.16 7.22 80.66 3.84 84.3 0C76.66 2.84 71 6.5 67.32 10.98C36.52 55.42 16.2 84.94 6.36 99.54C5.76 101.34 3.64 102.58 0 103.26C4.08 103.46 7.56 103.26 10.44 102.66C36.16 102.26 48.98 101.9 48.9 101.58Z"
          />
          <path
            id="shape1"
            transform="translate(5.04000007302454, 104.820001518737)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M51.96 0C55.48 0.6 57.18 1.3 57.06 2.1C58.66 9.46 58.7 16.98 57.18 24.66C56.22 25.86 54.52 26.38 52.08 26.22C53.12 45.9 53.94 56.76 54.54 58.8C57.34 67.08 65.88 87.04 80.16 118.68C83.24 123.48 85.88 126.5 88.08 127.74C82.44 127.34 76.64 123.68 70.68 116.76L70.68 116.76C70.68 116.76 50.6 87.7 10.44 29.58C9.2 26.98 6.9 25.38 3.54 24.78C1.34 23.38 0.18 19.32 0.06 12.6L0 13.08C0.36 6 1.48 2.12 3.36 1.44"
          />
          <path
            id="shape2"
            transform="translate(9.07925075903063, 129.525403727529)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0.00241201C3.67696 0.00241201 5.51543 0.00241201 5.51543 0.00241201C7.94564 -0.0294637 9.80075 0.254598 11.0807 0.854598C24.9607 1.6546 38.0408 1.7746 50.3208 1.2146"
          />
          <path
            id="shape3"
            transform="translate(71.3100049677976, 44.2500030826678)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0.45 0C4.01 0.64 3.86 1.39 0 2.25"
          />
          <path
            id="shape4"
            transform="translate(64.2600044766607, 61.0200042509467)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0.39 0C3.05 1 2.92 1.56 0 1.68"
          />
          <path
            id="shape5"
            transform="translate(58.2300040565819, 83.4300058121351)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0.12 0C1.78 0.6 1.74 1.05 0 1.35"
          />
          <path
            id="shape6"
            transform="translate(58.3200040628517, 150.69001049779)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0.15 0C2.27 1.04 2.22 1.64 0 1.8"
          />
          <path
            id="shape7"
            transform="translate(63.6300044327718, 173.049142490217)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0.0208696C4.54 -0.13913 4.84 0.62087 0.9 2.30087"
          />
          <path
            id="shape8"
            transform="translate(70.4100049050992, 189.450013197998)"
            fill="none"
            stroke="#000000"
            strokeWidth="0.72"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M0 0C5.56 0.84 5.85 1.57 0.87 2.19"
          />
        </svg>
      ),
    },
  });
  // const [PlaneComponents, setPlaneComponents] = useState({
  //   svg_name: "front_wing",
  //   data_x: "200",
  //   daya_y: "200",
  //   width: "200px",
  //   height: "200px"
  // })
  const canvasHeight = 1080;
  const canvasWidth = 1920;

  const undoStack = useRef([]);
  const redoStack = useRef([]);

  const handleUpdateUndoStack = () => {
    console.log(interactableItems);
    // const clone = require('lodash').cloneDeep( interactableItems )
    // console.log(clone)
    undoStack.current.push({
      view: view,
      interactableItems: interactableItems,
    });
  };

  const handleNewAction = () => {
    redoStack.current = [];
  };
  const handleUndo = () => {
    if (undoStack.current.length == 0) return;
    const { view: previousView, interactableItems: previousInteractableItems } =
      undoStack.current.pop();
    handleDeselectItem();
    selectedItem.current = { view: null, item: null };
    redoStack.current.push({
      view: view,
      interactableItems: interactableItems,
    });
    setView(previousView);
    setInteractableItems(previousInteractableItems);
  };

  const handleRedo = () => {
    if (redoStack.current.length == 0) return;
    const { view: nextView, interactableItems: nextInteractableItems } =
      redoStack.current.pop();
    console.log(nextView);
    undoStack.current.push({
      view: view,
      interactableItems: interactableItems,
    });
    setView(nextView);
    setInteractableItems(nextInteractableItems);
  };

  const handleRedoStack = () => {
    console.log(document.getElementById("front_canvas").children);
    console.log("save");
  };

  const handleLoad = () => {
    console.log("load");
  };

  const [interactableItems, setInteractableItems] = useState({
    front_canvas: [],
    side_canvas: [],
    top_canvas: [],
  });

  const [view, setView] = useState("front");
  const handleChangeView = (event) => {
    handleDeselectItem();
    handleSave();
    const target = event.target;
    setView(target.textContent.toLowerCase());
  };

  const handleAddInteractableItems = (event) => {
    handleUpdateUndoStack();
    handleNewAction();
    const svgHtmlElement = event.target.childNodes[0];
    console.log(svgHtmlElement);
    const planeModel = svgHtmlElement.getAttribute("model");
    const plane_component_name = event.target.getAttribute("button_name");
    console.log(plane_component_name);
    const viewBox = svgHtmlElement.getAttribute("viewBox").split(" ");
    console.log(viewBox);
    const width = viewBox[2];
    const height = viewBox[3];
    const aspectRatio = width / height;
    const buttonSize = 200;
    const maxButtonSize = buttonSize * 3;
    let buttonWidth = aspectRatio > 1 ? aspectRatio * buttonSize : buttonSize;
    let buttonHeight = aspectRatio < 1 ? buttonSize / aspectRatio : buttonSize;
    if (buttonWidth > maxButtonSize) {
      const factor = buttonWidth / maxButtonSize;
      buttonWidth = maxButtonSize;
      buttonHeight /= factor;
    }
    if (buttonHeight > maxButtonSize) {
      const factor = buttonHeight / maxButtonSize;
      buttonHeight = maxButtonSize;
      buttonWidth /= factor;
    }
    const canvas_name = view + "_canvas";
    const data_x = canvasWidth / 2 - buttonWidth / 2;
    const data_y = canvasHeight / 2 - buttonHeight / 2;
    const planeComponent = {
      index: interactableItems[canvas_name].length,
      zIndex: interactableItems[canvas_name].length,
      model: planeModel,
      width: buttonWidth,
      height: buttonHeight,
      data_x: data_x,
      data_y: data_y,
      plane_component_name: plane_component_name,
      svg: planeComponents[view][plane_component_name],
      style: {
        transform: `translate(${data_x}px, ${data_y}px)`,
        // width: `${buttonWidth}px`,
        // height: `${buttonHeight}px`,
      },
    };
    setInteractableItems({
      ...interactableItems,
      [canvas_name]: [...interactableItems[canvas_name], planeComponent],
    });
    // setInteractableItems([...interactableItems,svgElement]);
  };

  const [disableCanvasDrag, setDisableCanvasDrag] = useState(false);
  const movePositionRef = useRef({ x: null, y: null });
  // const handleMouseStart = () => {

  // }
  const handleDisableCanvasDrag = () => {
    console.log("disable");
    return setDisableCanvasDrag(true);
  };
  const handleEnableCanvasDrag = () => {
    console.log("enable");
    setDisableCanvasDrag(false);
  };

  const front_canvas = useRef(null);
  const side_canvas = useRef(null);
  const top_canvas = useRef(null);
  const handleSave = () => {
    if (
      mousePosition.current.x === mouseDownPosition.current.x &&
      mousePosition.current.y === mouseDownPosition.current.y &&
      touchEndPosition.current.x === touchStartPosition.current.x &&
      touchEndPosition.current.y === touchStartPosition.current.y
    ) {
      console.log("same mouse position");
      console.log("same touch position");
      return;
    }
    handleUpdateUndoStack();
    handleNewAction();
    console.log("save");

    const canvas_name = view + "_canvas";
    let canvas = null;
    switch (view) {
      case "front":
        canvas = front_canvas.current;
        break;
      case "side":
        canvas = side_canvas.current;
        break;
      case "top":
        canvas = top_canvas.current;
        break;
    }
    const newPlaneComponents = [];
    console.log(canvas);
    Array.from(canvas.children).forEach((child, index) => {
      const plane_component_name = child.getAttribute("plane_component_name");
      const data_x = child.getAttribute("data_x");
      const data_y = child.getAttribute("data_y");
      const styleWidth = child.style.width;
      const styleHeight = child.style.height;
      const planeComponent = {
        index: index,
        zIndex: index,
        model: child.getAttribute("model"),
        width: child.getAttribute("width"),
        height: child.getAttribute("height"),
        data_x: data_x,
        data_y: data_y,
        plane_component_name: plane_component_name,
        svg: planeComponents[view][plane_component_name],
        style: {
          transform: `translate(${data_x}px, ${data_y}px)`,
          width: styleWidth,
          height: styleHeight,
        },
      };
      newPlaneComponents.push(planeComponent);
    });

    console.log(interactableItems);
    setInteractableItems({
      ...interactableItems,
      [canvas_name]: newPlaneComponents,
    });
    // if (deepEqual(newInteractableItems,interactableItems)) {
    //   console.log("same")
    // }
    // else {
    //   console.log("different")
    // }

    // setCanvasItems({
    //   front_canvas: planeComponents_front,
    //   side_canvas: planeComponents_side,
    //   top_canvas: planeComponents_top
    // })
  };
  const mousePosition = useRef({ x: null, y: null });
  const mouseDownPosition = useRef({ x: null, y: null });

  const touchEndPosition = useRef({ x: null, y: null });
  const touchStartPosition = useRef({ x: null, y: null });
  const handleMouseDownPosition = () => {
    mouseDownPosition.current.x = mousePosition.current.x;
    mouseDownPosition.current.y = mousePosition.current.y;
    console.log(mouseDownPosition.current);
  };

  const handleTouchStartPosition = (event) => {
    touchStartPosition.current.x = event.changedTouches[0].clientX;
    touchStartPosition.current.y = event.changedTouches[0].clientY;

    // touchStartPosition.current.x = event.touches[0].clientX
    // touchStartPosition.current.y = event.touches[0].clientY
    // console.log(touchStartPosition.current)
  };

  const handleTouchEndPosition = (event) => {
    touchEndPosition.current.x = event.changedTouches[0].clientX;
    touchEndPosition.current.y = event.changedTouches[0].clientY;
    // console.log(event.touches[0].clientY)
    // touchEndPosition.current.x = event.touches[0].clientX
    // touchEndPosition.current.y = event.touches[0].clientY
    // console.log(touchEndPosition.current)
  };

  const handleMousePosition = (event) => {
    mousePosition.current.x = event.clientX;
    mousePosition.current.y = event.clientY;
    // console.log(mouseUpPosition.current)
  };
  useEffect(() => {
    console.log(document.activeElement);
  }, [document.activeElement]);

  const selectedItem = useRef({ view: null, index: null });

  const handleChangeSelectItemStyle = () => {
    if (selectedItem.current.view == null) return;
    let canvas = null;
    switch (selectedItem.current.view) {
      case "front":
        canvas = front_canvas.current;
        break;
      case "side":
        canvas = side_canvas.current;
        break;
      case "top":
        canvas = top_canvas.current;
        break;
    }
    console.log(selectedItem.current.index);
    console.log(canvas.children[selectedItem.current.index]);
    canvas.children[selectedItem.current.index].style.borderColor = "orange";
  };
  const handleSelectItem = (event) => {
    handleDeselectItem();
    selectedItem.current.view = view;
    selectedItem.current.index = event.target.getAttribute("index");
    let canvas = null;
    switch (selectedItem.current.view) {
      case "front":
        canvas = front_canvas;
        break;
      case "side":
        canvas = side_canvas;
        break;
      case "top":
        canvas = top_canvas;
        break;
    }
    console.log(event.target.getAttribute("index"));
    console.log(selectedItem.current.index);
    console.log(canvas.current.children[selectedItem.current.index]);
    canvas.current.children[selectedItem.current.index].style.borderColor =
      "orange";
  };

  const handleDeselectItem = () => {
    if (selectedItem.current.view == null) return;
    let canvas = null;
    switch (selectedItem.current.view) {
      case "front":
        canvas = front_canvas.current;
        break;
      case "side":
        canvas = side_canvas.current;
        break;
      case "top":
        canvas = top_canvas.current;
        break;
    }
    canvas.children[selectedItem.current.index].style.borderColor =
      "transparent";
    selectedItem.current = { view: null, index: null };
  };

  const handleDelete = () => {
    if (selectedItem.current.view == null) return;
    const canvas_name = view + "_canvas";
    const planeComponents = [];
    const index = selectedItem.current.index;
    handleDeselectItem();
    handleUpdateUndoStack();
    interactableItems[canvas_name].forEach((item) => {
      if (item.index == index) return;
      else if (item.index < index) planeComponents.push(item);
      else {
        item.index--;
        planeComponents.push(item);
      }
    });
    setInteractableItems({
      ...interactableItems,
      [canvas_name]: planeComponents,
    });
  };

  const handleLayerMoveUp = () => {
    if (selectedItem.current.view == null) return;
    const index = parseInt(selectedItem.current.index);
    const canvas_name = view + "_canvas";
    if (index == interactableItems[canvas_name].length - 1) return;
    handleUpdateUndoStack();
    const cloneArray = [...interactableItems[canvas_name]];
    const temp = { ...cloneArray[index] };
    cloneArray[index] = { ...cloneArray[index + 1] };
    cloneArray[index + 1] = temp;
    cloneArray[index].index = index;
    cloneArray[index].zIndex = index;
    cloneArray[index + 1].index = index + 1;
    cloneArray[index + 1].zIndex = index + 1;
    // console.log(interactableItems[canvas_name])
    handleDeselectItem();
    selectedItem.current = { view: view, index: index + 1 };
    handleChangeSelectItemStyle();
    console.log(selectedItem.current.index);
    setInteractableItems({ ...interactableItems, [canvas_name]: cloneArray });
  };

  const handleLayerMoveDown = () => {
    if (selectedItem.current.view == null) return;
    const index = parseInt(selectedItem.current.index);
    const canvas_name = view + "_canvas";
    if (index == 0) return;
    handleUpdateUndoStack();
    const cloneArray = [...interactableItems[canvas_name]];
    const temp = { ...cloneArray[index] };
    cloneArray[index] = { ...cloneArray[index - 1] };
    cloneArray[index - 1] = temp;
    cloneArray[index].index = index;
    cloneArray[index].zIndex = index;
    cloneArray[index - 1].index = index - 1;
    cloneArray[index - 1].zIndex = index - 1;
    // console.log(interactableItems[canvas_name])
    handleDeselectItem();
    selectedItem.current = { view: view, index: index - 1 };
    handleChangeSelectItemStyle();
    console.log(selectedItem.current.index);
    setInteractableItems({ ...interactableItems, [canvas_name]: cloneArray });
  };

  const copyItem = useRef(null);
  const handleCopy = () => {
    const canvas_name = selectedItem.current.view + "_canvas";
    const index = parseInt(selectedItem.current.index);
    console.log(canvas_name + " " + index);
    copyItem.current = { ...interactableItems[canvas_name][index] };
  };
  const handlePaste = () => {
    if (view !== selectedItem.current.view) return;
    console.log("paste");
    const canvas_name = selectedItem.current.view + "_canvas";
    handleUpdateUndoStack();
    setInteractableItems({
      ...interactableItems,
      [canvas_name]: [...interactableItems[canvas_name], copyItem.current],
    });
  };
  return (
    <div className="builderPage" style={{ position: "absolute" }}>
      {/* <div className="viewWindow" style={{ position: "absolute", width: "80vw", height: "80vh", backgroundColor: "rgba(0,0,0,0.3)"}}> */}
      <ViewBoard disableCanvasDrag={disableCanvasDrag}>
        <BuilderCanvas
          ref={front_canvas}
          className="front_canvas"
          // handleItemOnMove={handleItemOnMove}
          id="front_canvas"
          interactableItems={interactableItems.front_canvas}
          handleDisableCanvasDrag={handleDisableCanvasDrag}
          handleEnableCanvasDrag={handleEnableCanvasDrag}
          handleSave={handleSave}
          handleMouseDownPosition={handleMouseDownPosition}
          handleMousePosition={handleMousePosition}
          canvasHeight={canvasHeight + "px"}
          canvasWidth={canvasWidth + "px"}
          handleSelectItem={handleSelectItem}
          handleTouchStartPosition={handleTouchStartPosition}
          handleTouchEndPosition={handleTouchEndPosition}
          handleDeselectItem={handleDeselectItem}
          display={view == "front"}
        />
        <BuilderCanvas
          ref={side_canvas}
          className="side_canvas"
          // handleItemOnMove={handleItemOnMove}
          id="side_canvas"
          interactableItems={interactableItems.side_canvas}
          handleDisableCanvasDrag={handleDisableCanvasDrag}
          handleEnableCanvasDrag={handleEnableCanvasDrag}
          handleSave={handleSave}
          handleMouseDownPosition={handleMouseDownPosition}
          handleMousePosition={handleMousePosition}
          canvasHeight={canvasHeight + "px"}
          canvasWidth={canvasWidth + "px"}
          handleSelectItem={handleSelectItem}
          handleTouchStartPosition={handleTouchStartPosition}
          handleTouchEndPosition={handleTouchEndPosition}
          handleDeselectItem={handleDeselectItem}
          display={view == "side"}
        />
        <BuilderCanvas
          ref={top_canvas}
          className="top_canvas"
          // handleItemOnMove={handleItemOnMove}
          id="top_canvas"
          interactableItems={interactableItems.top_canvas}
          handleDisableCanvasDrag={handleDisableCanvasDrag}
          handleEnableCanvasDrag={handleEnableCanvasDrag}
          handleSave={handleSave}
          handleMouseDownPosition={handleMouseDownPosition}
          handleMousePosition={handleMousePosition}
          canvasHeight={canvasHeight + "px"}
          canvasWidth={canvasWidth + "px"}
          handleSelectItem={handleSelectItem}
          handleTouchStartPosition={handleTouchStartPosition}
          handleTouchEndPosition={handleTouchEndPosition}
          handleDeselectItem={handleDeselectItem}
          display={view == "top"}
        />
      </ViewBoard>

      {/* <BuilderCanvas className="side_canvas" id="side_canvas" interactableItems={interactableItems.side_canvas} />
        <BuilderCanvas className="top_canvas" id="top_canvas" interactableItems={interactableItems.top_canvas} /> */}
      <SideBar
        handleSave={handleSave}
        planeComponents={planeComponents}
        handleAddInteractableItems={handleAddInteractableItems}
        view={view}
        handleChangeView={handleChangeView}
        handleRedo={handleRedo}
        handleUndo={handleUndo}
        handleDelete={handleDelete}
        handleLayerMoveUp={handleLayerMoveUp}
        handleLayerMoveDown={handleLayerMoveDown}
        handleCopy={handleCopy}
        handlePaste={handlePaste}
      />
    </div>
    // </div>
  );
};

export default Builder;
