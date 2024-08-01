interface CircleLineProps {
  className?: string;
}

const CircleLine = ({ className }: CircleLineProps) => {
  return (
    <svg
      className={className}
      width={256}
      height={128}
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <defs>
        {" "}
        <linearGradient
          id="sw-gradient"
          x1="0"
          x2="1"
          y1="</linearGradient>1"
          y2="0"
        >
          {" "}
          <stop
            id="stop1"
            stop-color="rgba(255, 128, 49, 1)"
            offset="0%"
          ></stop>{" "}
          <stop
            id="stop2"
            stop-color="rgba(251, 168, 31, 1)"
            offset="100%"
          ></stop>{" "}
        </linearGradient>{" "}
      </defs>{" "}
      <path
        fill="none"
        d="M24.2,-26.5C32.2,-22.2,40,-15.3,41.2,-7.4C42.4,0.4,36.9,9.3,30.7,15.3C24.4,21.4,17.2,24.6,10.2,26.4C3.2,28.2,-3.7,28.6,-11.7,27.6C-19.7,26.6,-28.9,24.3,-34.8,18.1C-40.7,12,-43.3,1.9,-41.8,-7.5C-40.3,-16.9,-34.6,-25.7,-26.9,-30.1C-19.3,-34.5,-9.6,-34.4,-0.8,-33.5C8.1,-32.6,16.2,-30.8,24.2,-26.5Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        stroke-width="2"
        // style="transition: all 0.3s ease 0s;"
        stroke="url(#sw-gradient)"
      ></path>{" "}
    </svg>
  );
};

export default CircleLine;
