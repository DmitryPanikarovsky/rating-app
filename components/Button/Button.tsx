import cn from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps, JSX, ReactNode } from "react";
import styles from "./Button.module.scss";
import ArrowIcon from "./arrow.svg";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    appearance: "primary" | "ghost";
    arrow?: "right" | "down" | "none";
}

export const Button = ({ appearance, arrow = "none", children, className, ...props }: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(
                styles.button,
                {
                    [styles.primary]: appearance === "primary",
                    [styles.ghost]: appearance === "ghost",
                },
                className
            )}
            {...props}
        >
            {children}
            {arrow !== "none" && (
                <span
                    className={cn(
                        styles.arrow,
                        {
                            [styles.down]: arrow === "down",
                        },
                        className
                    )}
                >
                    <ArrowIcon />
                </span>
            )}
        </button>
    );
};
