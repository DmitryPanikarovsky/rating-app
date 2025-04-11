import cn from "classnames";
import { DetailedHTMLProps, HTMLAttributes, JSX, ReactNode } from "react";
import styles from "./Paragraph.module.scss";

interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: ReactNode;
    size?: "s" | "m" | "l";
}

export const Paragraph = ({ size = "m", children, className, ...props }: ParagraphProps): JSX.Element => {
    return (
        <p
            className={cn(
                styles.paragraph,
                styles[size],
                {
                    // [styles.s]: size === "s",
                    // [styles.m]: size === "m",
                    // [styles.l]: size === "l",
                },
                className
            )}
            {...props}
        >
            {children}
        </p>
    );
};
