import React from "react";
import cn from "clsx";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-4xl bg-white dark:bg-black",
        className,
      )}
    >
      {" "}
      {children}{" "}
    </div>
  );
}

export default Container;
