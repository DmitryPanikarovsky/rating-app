import cn from "classnames";
import { DetailedHTMLProps, HTMLAttributes, JSX } from "react";
import styles from "./Footer.module.scss";

interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string;
}

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    return (
        <footer className={cn(styles.footer, className)} {...props}>
            <div>OwlTop © 2020 - {new Date().getFullYear()} Все права защищены</div>
            <a href="#" target="_blank">
                Пользовательское соглашение
            </a>
            <a href="#" target="_blank">
                Политика конфиденциальности
            </a>
        </footer>
    );
};
