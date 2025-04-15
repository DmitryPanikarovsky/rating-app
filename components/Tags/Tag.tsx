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
        <>
            {href ? (
                <a href={href} className={styles.tag}>
                    <div className={cn(styles.tag, styles[size], styles[color], className)} {...props}>
                        {children}
                    </div>
                </a>
            ) : (
                <div className={cn(styles.tag, styles[size], styles[color], className)} {...props}>
                    {children}
                </div>
            )}
        </>
    );
};
