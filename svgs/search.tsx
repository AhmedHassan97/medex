import * as React from "react";
import { SVGProps } from "react";

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} {...props}>
    <path
      style={{
        fill: "none",
      }}
      d="M0 0h36v36H0z"
    />
    <path
      d="m24.576 22.157-4.61-4.492a10.748 10.748 0 1 0-8.23 3.84 10.637 10.637 0 0 0 6.16-1.946l4.659 4.541a1.4 1.4 0 1 0 2.021-1.944ZM11.736 2.8a7.947 7.947 0 1 1-7.947 7.947A7.956 7.956 0 0 1 11.736 2.8Z"
      transform="translate(5.465 6.028)"
      style={{
        fill: "#fff",
      }}
    />
    <script type="text/javascript" />
  </svg>
);

export default SearchIcon;
