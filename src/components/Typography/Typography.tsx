import { HTMLAttributes } from "react";

interface ITypography
  extends HTMLAttributes<HTMLSpanElement & HTMLParagraphElement> {
  as: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "sm" | "md" | "lg";
}

export const Typography: React.FC<ITypography> = ({
  as = "span",
  className,
  size,
  ...props
}) => {
  const Componet = as;

  return <Componet className={`${className}`} {...props} />;
};
