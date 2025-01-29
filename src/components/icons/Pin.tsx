import React from 'react';

interface PinProps {
  className?: string;
  color?: string;
  size?: number;
}

const Pin = ({ className, color, size = 20 }: PinProps) => {
  return (
    <svg
      data-owq="true"
      data-qa="pin"
      aria-hidden="true"
      viewBox="0 0 20 20"
      width={size}
      height={size}
    >
      <path
        fill={color}
        className={className}
        fillRule="evenodd"
        d="M7.718 3.272 3.271 7.719l2.644.528a.75.75 0 0 1 .383.205l2.107 2.108a.75.75 0 0 1 .198.712c-.257 1.025-.369 1.926-.252 2.8.086.644.3 1.302.71 2.003l7.013-7.013c-.7-.41-1.359-.625-2.004-.71-.873-.117-1.773-.005-2.799.251a.75.75 0 0 1-.712-.197L8.452 6.299a.75.75 0 0 1-.205-.383zm-.73-1.391a1.25 1.25 0 0 1 2.11.639l.575 2.879 1.651 1.65c.977-.214 1.95-.317 2.945-.185 1.146.153 2.27.612 3.431 1.483a.75.75 0 0 1 .08 1.13L14.16 13.1l4.121 4.121a.75.75 0 0 1-1.06 1.06l-4.122-4.12-3.621 3.62a.75.75 0 0 1-1.13-.08c-.872-1.161-1.33-2.284-1.483-3.43-.133-.995-.03-1.968.185-2.945L5.4 9.674l-2.88-.576a1.25 1.25 0 0 1-.639-2.11z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default Pin;
