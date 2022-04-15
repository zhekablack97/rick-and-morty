import { HTMLAttributes } from "react";

interface ITypography
  extends HTMLAttributes<HTMLSpanElement & HTMLParagraphElement> {
  as: "span" | "p";
}

export const Typography: React.FC<ITypography> = ({
  as = "span",
  className,
  ...props
}) => {
  const Componet = as;

  return <Componet className={`${className}`} {...props} />;
};
