import { EjeIconSize } from "@/lib/types";
import React from "react";

const Eje2Desafios = ({ size = 85 }: EjeIconSize) => {
  return (
    <svg width={size} height={size} viewBox="0 0 85 85" fill="none">
      <g clipPath="url(#clip0_6263_2777)">
        <path
          d="M42.5 0C19.0252 0 0 19.0252 0 42.5C0 65.9748 19.0252 85 42.5 85C65.9748 85 85 65.9748 85 42.5C85 19.0252 65.9748 0 42.5 0ZM42.5 7.26415C61.934 7.26415 77.7516 23.066 77.7516 42.5C77.7516 61.934 61.934 77.7516 42.5 77.7516C23.066 77.7516 7.26415 61.934 7.26415 42.5C7.26415 23.066 23.066 7.26415 42.5 7.26415Z"
          fill="currentColor"
        />
        <path
          d="M79.324 38.8679H5.69189V46.1321H79.324V38.8679Z"
          fill="currentColor"
        />
        <path
          d="M46.1323 2.65723H38.8682V82.1541H46.1323V2.65723Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_6263_2777">
          <rect width="85" height="85" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Eje2Desafios;
