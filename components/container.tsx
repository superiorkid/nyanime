import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {}

const Container = (props: ContainerProps) => {
  const { children, className, ...restProps } = props;

  return (
    <div
      className={cn("max-w-screen-xl mx-auto px-5", className)}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Container;
