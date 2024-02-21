import React from "react";

export function Card({ className, children }) {
  return <div className={className}>{children}</div>;
}

export function CardHeader({ className, children }) {
  return <header className={className}>{children}</header>;
}

export function CardContent({ className, children }) {
  return <div className={className}>{children}</div>;
}

export function CardFooter({ className, children }) {
  return <div className={className}>{children}</div>;
}
