import React, { MouseEventHandler } from "react";
interface Props {
  title: string;
  url: string;
  unread: boolean;
  index: number;
  handleClick: MouseEventHandler;
  id: string;
}
export default function Server({
  title,
  url,
  unread,
  index,
  handleClick,
  id,
}: Props) {
  return (
    <div>
      {unread ? (
        <div
          id={id}
          key={index}
          className="mx-2 relative before:content-[''] before:bg-nord-before-light 
        dark:before:bg-nord-before-dark
        before:top-1/2 before:absolute before:transform before:-translate-x-full before:w-1 before:h-4 before:-translate-y-1/2 before:rounded-r-md hover:before:h-8 hover:before:transition-all hover:before:duration:500 group rounded-2xl cursor-pointer"
          title={title}
          onClick={handleClick}
        >
          <img
            className="rounded-xl w-24 h-24 mx-auto my-2 group-hover:rounded-3xl
                transition-all group-hover:ease-out"
            src={url}
            alt=""
          />
          {title === "Home" ? <span className="border-bottom"></span> : null}
        </div>
      ) : (
        <div
          id={id}
          key={index}
          className="mx-2 relative before:invisible before:content-[''] before:bg-nord-before-light 
          dark:before:bg-nord-before-dark before:top-1/2 before:absolute before:transform before:-translate-x-full before:w-1 before:h-4 before:-translate-y-1/2 before:rounded-r-md hover:before:h-8 hover:before:transition-all hover:before:duration:500 group rounded-2xl hover:before:visible cursor-pointer"
          title={title}
          onClick={handleClick}
        >
          <img
            className="rounded-3xl w-24 h-24 mx-auto my-2 group-hover:rounded-xl
                transition-all group-hover:ease-out"
            src={url}
            alt=""
          />
          {title === "Home" ? <span className="border-bottom"></span> : null}
        </div>
      )}
    </div>
  );
}
