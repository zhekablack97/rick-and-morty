import { HTMLAttributes } from "react";

interface IGid extends HTMLAttributes<HTMLDivElement> {}

export const Grid: React.FC<IGid> = (props) => <div {...props} />;
