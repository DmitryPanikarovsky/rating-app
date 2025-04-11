import cn from "classnames";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from "./Tag.module.scss";

interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    href?: string;
    size?: "s" | "m";
    color?: "ghost" | "orange" | "grey" | "green" | "primary";
}

export const Tag = ({ size = "s", color = "ghost", href, children, className, ...props }: TagProps) => {
    return (
        <div className={cn(styles.tag, styles[size], styles[color], className)} {...props}>
            {href ? <a href="href">{children}</a> : <>{children}</>}
        </div>
    );
};
