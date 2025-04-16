import cn from "classnames";
import { DetailedHTMLProps, HTMLAttributes, JSX } from "react";
import styles from "./Header.module.scss";

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string;
}

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
    return (
        <div className={cn(styles.header, className)} {...props}>
            Header
        </div>
    );
};
